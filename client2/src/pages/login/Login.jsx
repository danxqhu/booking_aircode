import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import Api from '../../utils/Api';
import usePost from '../../hooks/usePost';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

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
    try {
      const res = await axios.post(Api.bookinglogin, credentials);
      console.log('bookinglogin res headers:', res);
      if (res.data.errorMsg === 0) {
        setData('Login successfully');
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
