import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import Api from '../../utils/Api';
import usePost from '../../hooks/usePost';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  console.log('redux user1:', user);

  // const { user, loading, error, dispatch } = useContext(AuthContext);

  // const { fetchData, data, loading, error } = usePost(Api.bookinglogin, JSON.stringify(credentials));

  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  async function loginPost(credentials) {
    // let encryptedCredentials = credentials
    // setCredentials()
    // await fetchData(credentials);
    // console.log(data);

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTExLCJpc0FkbWluIjpmYWxzZSwiZXhwaXJlIjoxNjgyMzI4MTMzMDYyLCJpYXQiOjE2ODIzMjgwNzMsImV4cCI6MTY4MjMzMTY3M30.n_3qi5wk6aVG417R0gLPHqgGR05_SvyVp-BsIfgVY54

    setLoading(true);
    console.log('redux user2:', user);

    try {
      const res = await axios.post(Api.bookinglogin, credentials);
      console.log('bookinglogin res headers:', res);
      if (res.data.errorMsg === 0) {
        setData('Login successfully');

        dispatch(login({ user: credentials.username }));

        // 存储jwt到Local Storage，并不安全，建议放到cookie里面，但是aircode不支持设置cookie，最后还是要自建服务器
        console.log(res.headers.authorization);
        localStorage.setItem('authorization', JSON.stringify(res.headers.authorization));
      } else if (res.data.errorMsg === 1) {
        setData('Wrong password');
      } else if (res.data.errorMsg === 2) {
        setData('User not found');
      }

      // setData(res.data.result);
      // stateRef.currentData = data;
    } catch (err) {
      // setError(err);
      console.log('err:', err);
    }
    setLoading(false);
  }

  useEffect(() => {
    console.log('data:', data);
    if (data === 'Login successfully') {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [data]);

  // const handleClick = async e => {
  const handleClick = e => {
    e.preventDefault();
    // dispatch({ type: 'LOGIN_START' });
    // navigate('/');
    console.log('credentials:', credentials);
    if (!credentials.username) {
      console.log('username空');
      alert('Type your username');
    } else if (!credentials.password) {
      console.log('password空');
      alert('Type your password');
    } else {
      loginPost(credentials);
      try {
        console.log();
        // const res = await axios.post('/auth/login', credentials);
        // dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      } catch (err) {
        // dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
      }
    }
  };

  // console.log(user);

  return (
    <div className="login">
      <div className="lContainer">
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {/* {data && <span>{data}</span>} */}
      </div>
    </div>
  );
};

export default Login;
