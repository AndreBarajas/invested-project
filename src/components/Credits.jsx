import React from 'react';
import { useEffect, useState } from 'react';
import getInfo from '../api/getInfo';
import getUserToEdit from '../api/getUserToEdit'
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import CreditUser from './CreditUser';

const Clients = () => {

    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [creditUser, setCreditUser] = useState([])

    useEffect(() => {
        getInfo().then(setData)
    }, [data])

    const handleViewCredit = (stateViewCredit, userId) => {
        setOpenModal(stateViewCredit)
        getUserToEdit(userId).then(setCreditUser)
    }

    return (
        <div className=' bg-violet-200 container mx-auto font-display '>
            <Navbar />
            
            <div className='flex items-center pl-80 '>
                <h1 className=' text-3xl font-normal p-8'>Créditos</h1>
            </div>

            <section className='bg-slate-50 w-2/3 rounded-lg  text-center ml-96'>
                <div className='grid grid-cols-5'>
                    <div className='border border-grey-400 px-4 py-2'>Foto</div>
                    <div className='border border-grey-400'>Nombre(s)</div>
                    <div className='border border-grey-400'>Apellidos</div>
                    <div className='border border-grey-400'>Total de crédito</div>
                    <div className='border border-grey-400'>Detalles</div>
                    
                </div>

                {data.map((user, index) => (
                    <div className='grid grid-cols-5 gap-3 m-4' key={index}>

                        <img src={user.photo} alt='avatar-icon'></img>
                        <p>{user.name}</p>
                        <p >{user.lastName}</p>
                        <p >{'Total de crédito'}</p>
                        <div>
                            <button
                                onClick={()=>handleViewCredit(true, user.id)}
                                type='button'
                                className='bg-yellow-200 hover:bg-yellow-300 rounded px-3 py-3 '>{'Ver créditos'}</button>
                        </div>
                    </div>
                ))}
            </section>
            <CreditUser handleViewCredit={handleViewCredit} openModal = {openModal} creditUser={creditUser} />
        </div>

    );
}

export default Clients; 