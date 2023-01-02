import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import './Navbar.css';
import library from "../LanguageLib";

const Navbar = (props) => {
  const { language, setLanguage, languageSelector, setLanguageSelector, navMenu, setNavMenu } = props;
  const handleLanguageClick = () => {
    languageSelector ? setLanguageSelector(false) : setLanguageSelector(true);
  }

  const handleMenuButtonClick = () => {
    navMenu ? setNavMenu(false) : setNavMenu(true);
  }

  return (
    <header className="nav">
        <nav>
          <Link to={'/'}><h1 className="nav-logo">BD</h1></Link>
          <ul className={navMenu ? 'menu-active' : 'menu-not-active'} >
            <Link to={'/'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.home}</li></Link>
            <Link to={'/about'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.about}</li></Link>
            <Link to={'/contact'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.contact}</li></Link>
            <Link to={'/map'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.map}</li></Link>
            <li onClick={() => handleLanguageClick()}>{library[language].navbar.languages}</li>
          </ul>
          <ul className="menu-button" >
            <li onClick={() => handleMenuButtonClick()}>{library[language].navbar.menu}</li>
          </ul>
        </nav>
        {languageSelector ?
          <LanguageSelection setLanguageSelector={setLanguageSelector} setLanguage={setLanguage} />
        :
          <div></div>
        }
      </header>
  )
}

export default Navbar;