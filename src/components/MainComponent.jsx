import NewClient from './NewClient';
import Clients from './Clients';
import { useState, useEffect } from 'react'

const Prueba = () => { 
   
    const [stateModal, setStateModal] = useState(false);

    const handleClickNew = (state) => {
        setStateModal(state);
    }

    return (
        // flex-row items-center
        <div className=' bg-violet-200 h-screen font-display '>
            <div className='text-5xl font-semibold p-10 pl-80 '>
                <h1>Bienvenido a Credify</h1>
            </div>
            <div className='flex items-center pl-72'>       
                    <h1 className=' text-3xl font-normal p-8' >Clientes</h1>      
                    <button onClick={() => handleClickNew(true)} className='bg-yellow-200 w-50 h-50'
                    >Agregar nuevo cliente</button>
            </div>

            <div className='pl-96 w-screen'>
                <NewClient stateModal={stateModal} handleClickNew={handleClickNew } />
                <Clients stateModal={stateModal} />
                {/* {<NewClient stateModal={stateModal} handleClickNew={handleClickNew} /> ? <NewClient stateModal={stateModal} handleClickNew={handleClickNew} /> : <Clients stateModal={stateModal} />} */}
            </div>
        </div>
    )
    
}

export default Prueba; 