import { Link } from "react-router-dom";
import LanguageSelection from "./LanguageSelection";
import './Navbar.css';
import library from "../LanguageLib";

const Navbar = (props) => {
  const { language, setLanguage, languageSelector, setLanguageSelector } = props;

  const handleLanguageClick = () => {
    languageSelector ? setLanguageSelector(false) : setLanguageSelector(true);
  }

  console.log('finding NEMO:',library[language].navbar.about)

  return (
    <header className="nav">
        <nav>
          <h1 className="nav-logo">DB</h1>
          <ul>
            <Link to={'/'} ><li>{library[language].navbar.home}</li></Link>
            <Link to={'/about'} ><li>{library[language].navbar.about}</li></Link>
            <Link to={'/contact'} ><li>{library[language].navbar.contact}</li></Link>
            <li onClick={() => handleLanguageClick()}>{library[language].navbar.languages}</li>
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