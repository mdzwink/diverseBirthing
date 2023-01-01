import { Link, useOutletContext } from "react-router-dom";
import library from "../LanguageLib";

const Home = () => {

  const [language] = useOutletContext();

  return (
    <section className="home-filter" >
      <Link to={'/family-planning'}>
        <div className="family-planning-selector">
          <div>{library[language].home.familyPlanning}</div>
        </div>
      </Link>
      <Link to={'/expecting'}>
        <div className="expecting-selector">
          <div>{library[language].home.expecting}</div>
        </div>
      </Link>
      <Link to={'/healthcare-professional'}>
        <div className="healthcare-professional-selector">
          <div>{library[language].home.healthcareProfessional}</div>
        </div>
      </Link>
      <Link to={'/map'}>
        <div className="map-selector">
          <div>{library[language].home.map}</div>
        </div>
      </Link>
    </section>
  )
}

export default Home;