import '../App.css'
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';
import LocationsMap from './LocationsMap';
import Footer from './Footer';
import BackToTop from './BackToTop';

const PostpartumCare = () => {
  const [language] = useOutletContext();

  return (
    <>
      <section className="home-pages">
        <div className="intro">
          <h1>{library[language].postpartumInfo.introHeader}</h1>
          <br/>
          <article>{library[language].postpartumInfo.intro}</article>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  )
}

export default PostpartumCare;