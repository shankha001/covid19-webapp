import React from 'react';
import './footer.styles.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-social">
        <a href="https://github.com/shankha001">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shankha-subhra-biswas-85b766191/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/ssb_op/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-brand">
        <h2>COVID-19 AOT</h2>
        <h3 className="dialogue"> Lets's Fight Covid Together</h3>
      </div>
    </div>
  );
}

export default Footer;
