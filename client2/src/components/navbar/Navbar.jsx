// import React from 'react';
import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useSelector } from 'react-redux';

export default function Navbar() {
  // const { user } = useContext(AuthContext);
  const user = useSelector(state => state.user.value);
  console.log('user:', user);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">H-booking</span>
        </Link>

        {user ? (
          user.user
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
