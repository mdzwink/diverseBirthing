import React from 'react';
import '../App.css';
import './PregnancyCare.css';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';

const PregnancyCare = () => {
  const [language] = useOutletContext();



  return (
    <main>
      <section className='home-pages' >
        <div className="intro">
          <h1>{library[language].pregnancyInfo.introHeader}</h1>
          <br/>
          <article>{library[language].pregnancyInfo.intro}</article>
        </div>
      </section>
      <section className="pregnancy-info-vid">
        <iframe src="https://www.youtube.com/embed/g-Ea9yt74Bo" title="Welcome to Midwifery in Canada" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </main>
  )
}

export default PregnancyCare;