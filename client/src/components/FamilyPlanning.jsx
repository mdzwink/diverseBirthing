import '../App.css'
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';
import LocationsMap from './LocationsMap';
import Footer from './Footer';
import BackToTop from './BackToTop';


const FamilyPlanning = () => {
  const [language] = useOutletContext();

  return (
    <>
      <section className='home-pages' >
        <div className="intro">
          <h1>{library[language].familyPlanningInfo.introHeader}</h1>
          <br/>
          <article>{library[language].familyPlanningInfo.intro}</article>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  )
}

export default FamilyPlanning;