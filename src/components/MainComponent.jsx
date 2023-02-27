import NewClient from './NewClient';
import Clients from './Clients';
import { useState } from 'react'
import Navbar from './Navbar';

const Prueba = () => {

     return (
        <div className=' bg-violet-200 h-screen font-display '>
                <Navbar />
            <div className='ml-96 w-screen'>
                <Clients />
            </div>
        </div>
    )

}

export default Prueba; 