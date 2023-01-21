import React from 'react';
import '../App.css';
import './PregnancyCare.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import library from '../LanguageLib';
import { useOutletContext } from 'react-router';

const PregnancyCare = () => {
  const [language] = useOutletContext();



  return (
    <main>
      <section className='home-pages' >
        <div className="intro pregnancy-intro">
          <h1>{library[language].pregnancyInfo.introHeader}</h1>
          <br/>
          <article>{library[language].pregnancyInfo.intro}</article>
        </div>
      </section>
      <section className="home-introduction">
        <div className="home-vid">
          <div className="vid-wrapper">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/g-Ea9yt74Bo" title="Welcome to Midwifery in Canada" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="cover-iframe-color"></div>
            <div className="cover-iframe-img"></div>
            <div className="cover-iframe-top-container" >
              <div className="cover-iframe-title">Birthing Diversity, an introduction.</div>
              <div className="cover-iframe-play"><FontAwesomeIcon icon={faPlay} /></div>
            </div>
          </div>
        </div>
        <div className="vid-points">
          <ul>
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
            <li>stuff</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default PregnancyCare;