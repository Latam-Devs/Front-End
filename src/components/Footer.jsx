import React from 'react';

import {
  FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaCreativeCommons,
  FaSistrix, FaEye
} from 'react-icons/fa';
import '@styles/components/Footer.css';

const Footer = () => (
  <footer className="Footer">
    <h3>
      <FaSistrix className="social" />
      FINDSQUARE
    </h3>
    <p className="copy">Latam-Devs <FaCreativeCommons className="social" /> ALL RIGHTS RESERVED</p>
    <div className="container-social">
      <p className="follow">FOLLOW US</p>
      <FaFacebookSquare className="social" />
      <FaTwitterSquare className="social" />
      <FaInstagramSquare className="social" />
    </div>
  </footer>
);

export default Footer;
