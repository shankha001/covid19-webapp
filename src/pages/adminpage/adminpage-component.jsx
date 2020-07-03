import React from 'react';
import './adminpage.styles.scss';

const AdminPage = function () {
  return (
    <div>
      <div className="login-container">
        <h2 className="login-title"> Admin Login</h2>
        <input className="login-input" placeholder="Email" type="email" />
        <input className="login-input" placeholder="Password" type="password" />
        <button className="login-button">LOGIN</button>
      </div>
    </div>
  );
};

export default AdminPage;
