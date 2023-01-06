import { Link, useOutletContext } from "react-router-dom";
import library from "../LanguageLib";
import LanguageSelection from "./LanguageSelection";

const Home = (props) => {

  const { language, setLanguage, languagePage, setLanguagePage, setLandingPage } = props;
  const onSectionClick = () => {
    setLandingPage(false);
  }

  return (
    <>
      {languagePage ?
      <>
        <LanguageSelection setLanguage={setLanguage} setLanguagePage={setLanguagePage} />
      </>
      :
      <>
        <Link to={'#'} className="home-logo" ><h1>Birthing<br/>Diversity</h1></Link>
        <section className="home-filter" >
          <Link to={'/family-planning'}>
            <div className="family-planning-selector" onClick={() => onSectionClick()}>
              <div>{library[language].home.familyPlanning}</div>
            </div>
          </Link>
          <Link to={'/expecting'}>
            <div className="expecting-selector" onClick={() => onSectionClick()}>
              <div>{library[language].home.expecting}</div>
            </div>
          </Link>
          <Link to={'/healthcare-professional'}>
            <div className="healthcare-professional-selector" onClick={() => onSectionClick()}>
              <div>{library[language].home.healthcareProfessional}</div>
            </div>
          </Link>
        </section>
        <h1 className="home-languagePage-toggle" onClick={() => setLanguagePage(true)} >Language<br/>Langue<br/>زبانیں</h1>
      </>
      }
    </>
  )
}

export default Home;