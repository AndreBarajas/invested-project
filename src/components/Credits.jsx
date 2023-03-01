import React, { useId } from 'react';
import { useEffect, useState } from 'react';
import getInfo from '../api/getInfo';
import getUserToEdit from '../api/getUserToEdit'
import Navbar from './Navbar';
import CreditUser from './CreditUser';
import IncreaseCredit from './IncreaseCredit'

const Clients = () => {

    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [openIncrease, setOpenIncrease] = useState(false)
    const [creditUser, setCreditUser] = useState([])

    useEffect(() => {
        getInfo().then(setData)
    }, [])

    const handleViewCredit = (stateViewCredit, userId) => {
        if (userId){
            getUserToEdit(userId).then(setCreditUser) 
        }
        setOpenModal(stateViewCredit)
    }

    const handleIncreaseCredit = (stateIncreaseCredit, userId) => {
            setOpenIncrease(stateIncreaseCredit, userId)
    }

    console.log("creditUser", creditUser )

    return (
        <div className=' bg-violet-200 container mx-auto font-display h-screen '>
            <Navbar />
            
            <div className='flex items-center pl-80 '>
                <h1 className=' text-3xl font-normal p-8 ml-20'>Créditos</h1>
            </div>

            <div className=' bg-slate-50 w-2/3 h-2/3 rounded-lg text-center ml-96 scroll-mr1.5'>
                <div className='grid grid-cols-5'>
                    <div className='border border-grey-400 px-4 py-2'>Foto</div>
                    <div className='border border-grey-400'>Nombre(s)</div>
                    <div className='border border-grey-400'>Apellidos</div>
                    <div className='border border-grey-400'>Ampliar crédito</div>
                    <div className='border border-grey-400'>Detalles</div>
                    
                </div>

                {data.map((user, index) => (
                    <div className='grid grid-cols-5 gap-3 m-4 ' key={index}>

                        <img
                            className='w-20 h-20 rounded-lg'
                            src={user.photo}
                            alt='avatar-icon'></img>
                        <p>{user.name}</p>
                        <p >{user.lastName}</p>
                        <div >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={()=> handleIncreaseCredit(true, user.id )}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                        </div>
                        <div>
                            <button
                                onClick={() => handleViewCredit(true, user.id)}
                                type='button'
                                className='bg-yellow-200 hover:bg-yellow-300 rounded px-3 py-3 '>
                                {'Ver créditos'}</button>
                        
                        </div>
                    </div>
                ))}
            </div>
            <CreditUser handleViewCredit={handleViewCredit} openModal={openModal} creditUser={creditUser} />
            <IncreaseCredit handleIncreaseCredit={handleIncreaseCredit}  openIncrease={openIncrease} creditUser={creditUser} />
        </div>

    );
}

export default Clients; 