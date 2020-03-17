import footerStyles from './Footer.module.css';
import React from 'react';

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className="container">
      <span className="text-muted">© Gatsby-Bootstrap Project 2020</span>
    </div>
  </footer>
);
export default Footer;
