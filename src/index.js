import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Achivement from './pages/Achivement';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Navigator from './pages/Navigator';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <Work/>
    <Skills/>
    <Achivement/>
    <Navigator/>
    <div className='h-[4000px]'></div>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
