import NewClient from './NewClient';
import Clients from './Clients';
import { useState, useEffect } from 'react'

const Prueba = () => { 
   
    const [stateModal, setStateModal] = useState(false);

    const handleClickNew = (state) => {
        setStateModal(state);
    }

    return (
        <div className=' bg-indigo-200 flex-row h-screen pl-64'>
            <div className='text-4xl p-8'>
                <h1>Bienvenido a Credify</h1>
            </div>
            <div className='flex space-x-96 '> 
               
                <div className='p-8'>
                    <h1>Clientes</h1>
                </div>
                <div>
                    <button onClick={() => handleClickNew(true)}>Agregar nuevo cliente</button>
                </div>
            </div>

            <div>
                <NewClient stateModal={stateModal} handleClickNew={handleClickNew } />
                <Clients stateModal={stateModal} />

                {/* {<NewClient stateModal={stateModal} handleClickNew={handleClickNew} /> ? <NewClient stateModal={stateModal} handleClickNew={handleClickNew} /> : <Clients stateModal={stateModal} />} */}

            </div>
           
        </div>

    )
    
}

export default Prueba; 