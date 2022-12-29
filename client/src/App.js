import React, { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import library from './LanguageLib';

function App() {
  

  console.log('library',library)

  const [languageSelector, setLanguageSelector] = useState('true')
  const [language, setLanguage] = useState('english');

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} languageSelector={languageSelector} setLanguageSelector={setLanguageSelector} />
      <Outlet context={ [language] } />
    </div>
  );
}

export default App;
