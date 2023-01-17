import React, { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  const [languagePage, setLanguagePage] = useState('true')
  const [navContent, setNavContent] = useState('');
  const [landingPage, setLandingPage] = useState('false')
  const [language, setLanguage] = useState('english');
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div className="App">
        {landingPage ? 
          <Home language={language} setLanguage={setLanguage} setNavContent={setNavContent} languagePage={languagePage} setLanguagePage={setLanguagePage} setLandingPage={setLandingPage} />
        :
        <>
          <Navbar language={language} setLanguage={setLanguage} navContent={navContent} landingPage={landingPage} setLandingPage={setLandingPage} languagePage={languagePage} setLanguagePage={setLanguagePage} navMenu={navMenu} setNavMenu={setNavMenu} />
          <Outlet context={ [language] } />
          <Footer setLanguagePage={setLanguagePage} />
          <BackToTop />
        </>
        }
    </div>
  );
}

export default App;
