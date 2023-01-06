import './Expecting.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';
import LocationsMap from './LocationsMap';
import BackToTop from './BackToTop';
import Footer from './Footer';

const Expecting = () => {
  const [language] = useOutletContext();

  return (
    <>
      <section className='expecting' >
        <h1 className='placeholder' >{library[language].home.expecting}</h1>
      </section>
      <LocationsMap />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Expecting;