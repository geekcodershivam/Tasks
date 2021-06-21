import React from 'react';
import './HEADER.css';
import Logo from '../../utils/SVG/logo.svg';
export default function HEADER() {
  return (
    <header className="header">
      <img src={Logo} alt="FamPay" />
    </header>
  );
}
