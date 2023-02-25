import React from 'react';
import { useEffect, useState } from 'react';
import getInfo from '../api/getInfo';
import deleteUser from '../api/deleteUser';

const Clients = ({ stateModal }) => { 

    const [data, setData] = useState([])
    
    useEffect(() => {
        getInfo().then(setData)
    }, [data])

    const handleDelete = (userId) => {
        deleteUser(userId)
    };

    if (!stateModal)
        return (
        <div className='container mx-auto text-center'>
            {/* {stateModal !& */}
                <table className='bg-white w-2/3 rounded-lg'>
                    <thead className='grid grid-cols-5'>

                        <th className='border border-grey-400 px-4 py-2'>Foto</th>
                        <th className='border border-grey-400'>Nombre(s)</th>
                        <th className='border border-grey-400'>Apellidos</th>
                        <th className='border border-grey-400'>Email</th>
                        <th className='border border-grey-400'>Acciones</th>

                    </thead>

                    {data.map((user) => (
                        <tbody className='grid grid-cols-5 gap-3 m-4'>
                            <img src={user.photo} alt='avatar-icon'></img>
                            <p>{user.name}</p>
                            <p>{user.lastName}</p>
                            <p>{user.email}</p>
                            <div className='grid grid-cols-3 gap-0 ' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={() => handleDelete(user.id)}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>

                            </div>

                        </tbody>
                    ))}
                </table>
            {/* } */}
        </div>
       
    );
}

export default Clients; 