import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import './Navbar.css';
import library from "../LanguageLib";

const Navbar = (props) => {
  const { language, setLanguage, navContent, landingPage, setLandingPage, languagePage, setLanguagePage, navMenu, setNavMenu } = props;


  const handleMenuButtonClick = () => {
    navMenu ? setNavMenu(false) : setNavMenu(true);
  }
  const handleLandingPageLink = ()=> {
    landingPage ? setLandingPage(false) : setLandingPage(true)
    setNavMenu(false)
  }

  const handleScreenWidth = () => {
    const ww = window.innerWidth
    if (ww < 940) {
      setNavMenu(false)
    }
  }
  window.addEventListener('resize', handleScreenWidth)

  return (
    <header className="nav">
        <nav>
          <Link to={'#'} onClick={() => handleLandingPageLink()} ><img src='/images/BD-logo2.0.png' alt='birthing diversity logo' className="nav-logo"/></Link>
          <div className={navMenu ? 'menu-active' : 'menu-not-active'} >
            <ul>
              {navContent === 'planning' ?
                <>
                  <div className='left-nav'>
                    <Link to={'#'} onClick={() => {handleMenuButtonClick(); handleLandingPageLink();}} ><li>{library[language].navbar.home}</li></Link>
                    <Link to={'/contact'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.contact}</li></Link>
                    <Link to={'/map'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.map}</li></Link>
                  </div>
                  <div className='right-nav'>
                    <Link to={'/about'} onClick={() => handleMenuButtonClick()} ><li>(i){library[language].navbar.about}</li></Link>
                    <Link to={'/#'} onClick={() => handleMenuButtonClick()} ><li>(i){library[language].navbar.contact}</li></Link>
                  </div>
                </>
                :
                <>
                  <div className='left-nav'>
                    <Link to={'#'} onClick={() => {handleMenuButtonClick(); handleLandingPageLink();}} ><li>{library[language].navbar.home}</li></Link>
                    <Link to={'#'} onClick={() => handleMenuButtonClick()} ><li>Trimester 1</li></Link>
                    <Link to={'#'} onClick={() => handleMenuButtonClick()} ><li>Trimester 2</li></Link>
                    <Link to={'#'} onClick={() => handleMenuButtonClick()} ><li>Trimester 3</li></Link>
                    <Link to={'/map'} onClick={() => handleMenuButtonClick()} ><li>{library[language].navbar.map}</li></Link>
                  </div>
                  <div className='right-nav'>
                    <Link to={'/about'} onClick={() => handleMenuButtonClick()} ><li>(i){library[language].navbar.about}</li></Link>
                    <Link to={'/#'} onClick={() => handleMenuButtonClick()} ><li>(i){library[language].navbar.contact}</li></Link>
                  </div>
                </>
              }
            </ul>
          </div>
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