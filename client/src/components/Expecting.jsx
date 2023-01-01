import './Expecting.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';

const Expecting = () => {
  const [language] = useOutletContext();

  return (
    <section className='expecting' >
      <h1 className='placeholder' >{library[language].home.expecting}</h1>
    </section>
  )
}

export default Expecting;