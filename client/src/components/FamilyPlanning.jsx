import './FamilyPlanning.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';


const FamilyPlanning = () => {
  const [language] = useOutletContext();

  return (
    <section className='family-planning' >
      <h1 className='placeholder' >{library[language].home.familyPlanning}</h1>
    </section>
  )
}

export default FamilyPlanning;