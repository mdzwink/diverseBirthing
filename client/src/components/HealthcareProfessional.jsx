import './HealthcareProfessional.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';

const HealthcareProfessional = () => {
  const [language] = useOutletContext();

  return (
    <section className="healthcare-professional">
      <h1 className='placeholder'>{library[language].home.healthcareProfessional}</h1>
    </section>
  )
}

export default HealthcareProfessional;