import './HealthcareProfessional.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';
import LocationsMap from './LocationsMap';

const HealthcareProfessional = () => {
  const [language] = useOutletContext();

  return (
    <>
      <section className="healthcare-professional">
        <div className="background-img"></div>
      </section>
      <LocationsMap />
    </>
  )
}

export default HealthcareProfessional;