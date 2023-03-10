import '../App.css'
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';

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
    </>
  )
}

export default PostpartumCare;