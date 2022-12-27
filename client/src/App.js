import React, { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [language, setLanguage] = useState('')

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
