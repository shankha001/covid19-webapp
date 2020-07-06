import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/virus.svg';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        <i className="fas fa-home icon"></i>
        Home
      </Link>
      <Link className="option" to="/world">
        <i className="fas fa-globe icon"></i>
        World
      </Link>
      <Link className="option" to="/india">
        <img
          className="icon "
          src={require('../../assets/images/india.png')}
          alt="hello"
        />
        India
      </Link>
      <Link className="option" to="/admin">
        <i className="fas fa-user-cog icon"></i>
        Login
      </Link>
    </div>
  </div>
);

export default Header;
