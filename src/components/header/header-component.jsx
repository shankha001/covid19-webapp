import React, { useEffect } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/virus.svg";

function Header({ location }) {
  useEffect(() => {
    console.log(location);
  }, [location]);

  const handleClick = () => {
    document.querySelector("ul").classList.toggle("active");
    document.querySelector("header").classList.toggle("margin-big");
  };

  const handleLinkClick = () => {
    document.querySelector("ul").classList.toggle("active");
    document.querySelector("header").classList.toggle("margin-big");
  };
  return (
    <React.Fragment>
      <header className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div>
          <div className="toggle" onClick={handleClick}>
            <i className="fas fa-bars menu"></i>
          </div>
          <ul className="options">
            <li>
              <Link className="option" to="/" onClick={handleLinkClick}>
                <i className="fas fa-home icon"></i>
                Home
              </Link>
            </li>
            <li>
              <Link className="option" to="/world" onClick={handleLinkClick}>
                <i className="fas fa-globe icon"></i>
                World
              </Link>
            </li>
            <li>
              <Link className="option" to="/india" onClick={handleLinkClick}>
                <img
                  className="icon "
                  src={require("../../assets/images/india.png")}
                  alt="hello"
                />
                India
              </Link>
            </li>
            <li>
              <Link className="option" to="/admin" onClick={handleLinkClick}>
                <i className="fas fa-user-cog icon"></i>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
