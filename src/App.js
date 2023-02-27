import './App.css';
import SideBanner from './components/SideBanner';
import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-row'>

        <div>
          <SideBanner />
        </div>
        <div>
          <MainComponent />
        </div>

      </div>
    
    </BrowserRouter>
   
  );
}

export default App;
