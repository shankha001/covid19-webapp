import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/virus.svg';

const Header = () => (
  <div>
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/world">
          Home
        </Link>
        <Link className="option" to="/">
          Statistics
        </Link>
        <Link className="option" to="/">
          Admin Panel
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
