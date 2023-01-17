import '../App.css'
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';


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
    </>
  )
}

export default FamilyPlanning;