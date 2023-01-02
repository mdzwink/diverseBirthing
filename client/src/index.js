import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import HealthcareProfessional from './components/HealthcareProfessional';
import FamilyPlanning from './components/FamilyPlanning';
import Expecting from './components/Expecting';
import LocationsMap from './components/LocationsMap'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'healthcare-professional',
        element: <HealthcareProfessional />
      },
      {
        path: 'family-planning',
        element: <FamilyPlanning />
      },
      {
        path: 'expecting',
        element: <Expecting />
      },
      {
        path: 'map',
        element: <LocationsMap />
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
