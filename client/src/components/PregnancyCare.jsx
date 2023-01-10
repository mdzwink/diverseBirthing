import '../App.css';
import './PregnancyCare.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';
import LocationsMap from './LocationsMap';
import BackToTop from './BackToTop';
import Footer from './Footer';

const PregnancyCare = () => {
  const [language] = useOutletContext();

  return (
    <>
      <section className='home-pages' >
        <div className="intro">
          <h1>{library[language].pregnancyInfo.introHeader}</h1>
          <br/>
          <article>{library[language].pregnancyInfo.intro}</article>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  )
}

export default PregnancyCare;