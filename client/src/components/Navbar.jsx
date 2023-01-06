import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import './Navbar.css';
import library from "../LanguageLib";

const Navbar = (props) => {
  const { language, setLanguage, landingPage, setLandingPage, languagePage, setLanguagePage, navMenu, setNavMenu } = props;
  const handleLanguageClick = () => {
    languagePage ? setLanguagePage(false) : setLanguagePage(true);
  }

  const handleMenuButtonClick = () => {
    navMenu ? setNavMenu(false) : setNavMenu(true);
  }
  const handleLandingPageLink = ()=> {
    landingPage ? setLandingPage(false) : setLandingPage(true)
  }

  return (
    <header className="nav">
        <nav>
          <Link to={'#'} onClick={() => handleLandingPageLink()} ><h1 className="nav-logo">Birthing<br/>Diversity</h1></Link>
          <ul className={navMenu ? 'menu-active' : 'menu-not-active'} >
            <Link to={'#'} onClick={() => {handleMenuButtonClick(); handleLandingPageLink();}} ><li>{library[language].navbar.home}</li></Link>
            <Link to={'/ourTeam'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.ourTeam}</li></Link>
            <Link to={'/contact'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.contact}</li></Link>
            <Link to={'/map'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.map}</li></Link>
            <li onClick={() => handleLanguageClick()}>{library[language].navbar.languages}</li>
          </ul>
          <ul className="menu-button" >
            <li onClick={() => handleMenuButtonClick()}>{library[language].navbar.menu}</li>
          </ul>
        </nav>
        {languagePage ?
          <LanguageSelection setLanguagePage={setLanguagePage} setLanguage={setLanguage} />
        :
          <div></div>
        }
      </header>
  )
}

export default Navbar;