import './App.css';
import SideBanner from './components/SideBanner';
import React from 'react';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className='flex flex-row'>
         
      <div>
        <SideBanner />
      </div>
      <div>
        <MainComponent />
      </div>
           
    </div>
  );
}

export default App;
