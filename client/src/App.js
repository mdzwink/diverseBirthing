import React, { useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import './App.css';
import Home from './components/Home';
import LanguageSelection from './components/LanguageSelection';
import Navbar from './components/Navbar';
import library from './LanguageLib';

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
        </>
        }
    </div>
  );
}

export default App;
