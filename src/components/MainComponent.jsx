import NewClient from './NewClient';
import Clients from './Clients';
import { useState } from 'react'
import Navbar from './Navbar';

const Prueba = () => {

    // const [stateModal, setStateModal] = useState(false);

    // const handleClickNew = (state) => {
    //     setStateModal(state);
    // }

    return (
        <div className=' bg-violet-200 h-screen font-display '>
                <Navbar />
            <div className='ml-96 w-screen'>
                {/* <NewClient stateModal={stateModal} handleClickNew={handleClickNew } /> */}
                <Clients />
            </div>
        </div>
    )

}

export default Prueba; 