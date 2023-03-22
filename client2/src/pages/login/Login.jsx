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

  // const { user, loading, error, dispatch } = useContext(AuthContext);

  const { fetchData, data, loading, error } = usePost(Api.bookinglogin, JSON.stringify(credentials));

  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  async function loginPost(credentials) {
    // let encryptedCredentials = credentials
    // setCredentials()
    await fetchData(credentials);
    // console.log(data);
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
    loginPost(credentials);
    try {
      // const res = await axios.post('/auth/login', credentials);
      // dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
    } catch (err) {
      // dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
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
        {data && <span>{data}</span>}
      </div>
    </div>
  );
};

export default Login;
