import React from "react";
import "./Logo.scss";
import logo from '../../images/logo_light.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (  <Link to="/"><img src={logo} alt="логотип" className="logo" /></Link>

  )
}

export default Logo;