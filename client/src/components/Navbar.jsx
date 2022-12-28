import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import './Navbar.css';

const Navbar = (props) => {
  const { language, setLanguage, languageSelector, setLanguageSelector } = props;

  const handleLanguageClick = () => {
    languageSelector ? setLanguageSelector(false) : setLanguageSelector(true);
  }

  return (
    <header className="nav">
        <nav>
          <h1 className="nav-logo">DB</h1>
          <ul>
            <Link to={'/'} ><li>{language.navbar.home}</li></Link>
            <Link to={'/about'} ><li>{language.navbar.about}</li></Link>
            <Link to={'/contact'} ><li>{language.navbar.contact}</li></Link>
            <li onClick={() => handleLanguageClick()}>{language.navbar.languages}</li>
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