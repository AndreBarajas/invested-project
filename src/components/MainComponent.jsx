import NewClient from './NewClient';
import Clients from './Clients';
import { useState, useEffect } from 'react'

const Prueba = () => { 
   
    const [stateModal, setStateModal] = useState(false);

    const handleClickNew = (state) => {
        setStateModal(state);
    }

    return (
        <div className=' bg-indigo-200 flex-row items-center h-screen '>
            <div className='text-5xl p-10 pl-80'>
                <h1>Bienvenido a Credify</h1>
            </div>
            <div className='flex items-center pl-72'> 
               
                <div className='p-8'>
                    <h1>Clientes</h1>
                </div>
                <div className='bg-yellow-200 w-50 h-50'>
                    <button onClick={() => handleClickNew(true)} >Agregar nuevo cliente</button>
                </div>
            </div>

            <div className='pl-96'>
                <NewClient stateModal={stateModal} handleClickNew={handleClickNew } />
                <Clients stateModal={stateModal} />

                {/* {<NewClient stateModal={stateModal} handleClickNew={handleClickNew} /> ? <NewClient stateModal={stateModal} handleClickNew={handleClickNew} /> : <Clients stateModal={stateModal} />} */}

            </div>
           
        </div>

    )
    
}

export default Prueba; 