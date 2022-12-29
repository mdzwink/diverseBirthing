import React, { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import library from './LanguageLib';

function App() {

  const [languageSelector, setLanguageSelector] = useState('true')
  const [language, setLanguage] = useState('english');
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} languageSelector={languageSelector} setLanguageSelector={setLanguageSelector} navMenu={navMenu} setNavMenu={setNavMenu} />
      <Outlet context={ [language] } />
    </div>
  );
}

export default App;
