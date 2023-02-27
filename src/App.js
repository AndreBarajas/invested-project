import './App.css';
import SideBanner from './components/SideBanner';
import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewClient from './components/NewClient';
import ModalEdit from './components/ModalEdit';
import Credits from './components/Credits';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-row'>
        <SideBanner />
        </div>
    
      <Routes>
        <Route exact path="/" element={<MainComponent />} />
        <Route exact path="/add-client" element={<NewClient />} />
        <Route exact path="/edit" element={<ModalEdit />} />
        <Route exact path="/credits" element={<Credits />} />
      </Routes>
      

    </BrowserRouter>
   
  );
}

export default App;
