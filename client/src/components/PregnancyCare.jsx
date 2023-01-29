import React, { useState } from 'react';
import '../App.css';
import './PregnancyCare.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';

const PregnancyCare = () => {
  const [language] = useOutletContext();
  const [iframeActive, setIframeActive] = useState(false);

  const handleIframeCoverClick = () => {

  }


  return (
    <main>
      <section className='home-pages' >
        <div className="intro pregnancy-intro">
          <h1>{library[language].pregnancyInfo.introHeader}</h1>
          <br/>
          <article>{library[language].pregnancyInfo.intro}</article>
        </div>
            <iframe className={iframeActive ? "active" : "inactive"} src="https://www.youtube.com/embed/g-Ea9yt74Bo" title="Welcome to Midwifery in Canada" allowFullScreen></iframe>
      </section>
      <section className="home-introduction">
        <div className="home-vid">
          <div className="vid-wrapper">
            <iframe className={iframeActive ? "active" : "inactive"} src="https://www.youtube.com/embed/KIOelF8DKC8" title="Nursing vs Midwifery: Which Career is Right For Me?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="cover-iframe-color"></div>
            <div className="cover-iframe-img"></div>
            <div className="cover-iframe-top-container" >
              <div className="cover-iframe-title">Birthing Diversity, an introduction.</div>
              <div className="cover-iframe-play" onClick={() => {setIframeActive(true); console.log('play clicked!')}}><FontAwesomeIcon icon={faPlay} /></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PregnancyCare;