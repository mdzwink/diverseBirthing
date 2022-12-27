import React, { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const library = {
    'english': {
      navbar: {
        home: 'home',
        about: 'about',
        contact: 'contact',
        languages: 'languages',
      },
      homeFilter: {
        familyPlanning: 'Family Planning',
        expecting: 'Expecting',
        healthcareProfessional: 'Healthcare Professional'
      }
    },
    'urdu': {
      navbar: {
        home: 'ghar',
        about: 'gird',
        contact: 'rabt',
        languages: 'zaban',
      },
      homeFilter: {
        familyPlanning: 'Family Planning',
        expecting: 'Expecting',
        healthcareProfessional: 'Healthcare Professional'
      }
    },
    'portugese': {
      navbar: {
        home: 'home',
        about: 'about',
        contact: 'contact',
        languages: 'languages',
      },
      homeFilter: {
        familyPlanning: 'Family Planning',
        expecting: 'Expecting',
        healthcareProfessional: 'Healthcare Professional'
      }
    },
    'spanish': {
      navbar: {
        home: 'home',
        about: 'about',
        contact: 'contact',
        languages: 'languages',
      },
      homeFilter: {
        familyPlanning: 'Family Planning',
        expecting: 'Expecting',
        healthcareProfessional: 'Healthcare Professional'
      }
    },
  }

  const [languageSelector, setLanguageSelector] = useState('true')
  const [language, setLanguage] = useState(library.english);

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} languageSelector={languageSelector} setLanguageSelector={setLanguageSelector} />
      <Outlet />
    </div>
  );
}

export default App;
