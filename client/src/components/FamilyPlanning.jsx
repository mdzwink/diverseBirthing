import './FamilyPlanning.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';
import LocationsMap from './LocationsMap';


const FamilyPlanning = () => {
  const [language] = useOutletContext();

  return (
    <>
      <section className='family-planning' >
        <h1 className='placeholder' >{library[language].home.familyPlanning}</h1>
      </section>
      <LocationsMap />
    </>
  )
}

export default FamilyPlanning;