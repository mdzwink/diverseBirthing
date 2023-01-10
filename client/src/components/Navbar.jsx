import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import './Navbar.css';
import library from "../LanguageLib";

const Navbar = (props) => {
  const { language, setLanguage, navContent, landingPage, setLandingPage, languagePage, setLanguagePage, navMenu, setNavMenu } = props;
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
          <Link to={'#'} onClick={() => handleLandingPageLink()} ><img src='https://github.com/mdzwink/diverseBirthing/blob/main/client/public/images/BD-logo.png?raw=true' alt='birthing diversity logo' className="nav-logo"/></Link>
          <ul className={navMenu ? 'menu-active' : 'menu-not-active'} >
            {navContent === 'planning' ?
              <>
                <Link to={'#'} onClick={() => {handleMenuButtonClick(); handleLandingPageLink();}} ><li>{library[language].navbar.home}</li></Link>
                <Link to={'/contact'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.contact}</li></Link>
                <Link to={'/map'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.map}</li></Link>
                <Link to={'/ourTeam'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.ourTeam}</li></Link>
                <li onClick={() => handleLanguageClick()}>{library[language].navbar.languages}</li>
              </>
              :
              <>
                <Link to={'#'} onClick={() => {handleMenuButtonClick(); handleLandingPageLink();}} ><li>{library[language].navbar.home}</li></Link>
                <Link to={'#'} onClick={() => handleMenuButtonClick()} ><li>Trimester 1</li></Link>
                <Link to={'#'} onClick={() => handleMenuButtonClick()} ><li>Trimester 2</li></Link>
                <Link to={'#'} onClick={() => handleMenuButtonClick()} ><li>Trimester 3</li></Link>
                <Link to={'/map'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.map}</li></Link>
                <Link to={'/ourTeam'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.ourTeam}</li></Link>

              </>
            }
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