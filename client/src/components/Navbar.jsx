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
            <li><Link to={'/'} >{language.navbar.home}</Link></li>
            <li><Link to={'/about'}>{language.navbar.about}</Link></li>
            <li><Link to={'/contact'}>{language.navbar.contact}</Link></li>
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