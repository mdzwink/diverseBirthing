import { Link, useOutletContext } from "react-router-dom";
import library from "../LanguageLib";
import LanguageSelection from "./LanguageSelection";

const Home = (props) => {

  const { language, setLanguage, languagePage, setLanguagePage, setNavContent, setLandingPage } = props;
  const onSectionClick = (selection) => {
    setNavContent(selection)
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
        <Link to={'#'} className="home-logo" ><img src='https://github.com/mdzwink/diverseBirthing/blob/main/client/public/images/BD-logo.png?raw=true' alt='birthing diversity logo' className="nav-logo"/></Link>
        <section className="home-filter" >
          <Link to={'/family-planning'} onClick={() => onSectionClick('planning')} >
            <div className="family-planning-selector" ></div>
            <h1>{library[language].home.familyPlanning}</h1>
          </Link>
          <Link to={'/pregnancy-care'} onClick={() => onSectionClick('pregnancy')} >
            <div className="pregnancy-care-selector" ></div>
            <h1>{library[language].home.pregnancyCare}</h1>
          </Link>
          <Link to={'/postpartum'} onClick={() => onSectionClick('postpartum')} >
            <div className="postpartum-selector" id={'postpartum-background'} ></div>
            <h1>{library[language].home.postpartumCare}</h1>
          </Link>
        </section>
        <h1 className="home-languagePage-toggle" onClick={() => setLanguagePage(true)} >Language<br/>Langue<br/>زبانیں</h1>
      </>
      }
    </>
  )
}

export default Home;