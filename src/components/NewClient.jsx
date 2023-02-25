import { useState } from 'react';
import postUsers from '../api/postUsers';

const NewClient = ({ stateModal, handleClickNew }) => { 

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [credit, setCredit] = useState('')

    const addUser = () => {
        const newUsers = { name: name, lastName: lastName, email: email, credit: { credit } }
        handleClickNew(false)
        return newUsers;
    }
   
    return (
        <>
            {stateModal && 
                <form className='bg-white font-display w-2/3 rounded-lg '>
                    <div className='flex space-x  py-2'>
                        <div className='w-1/2 py-2 m-2'>
                            <label for='name'>Nombre</label>
                            <input
                                type="text"
                                className=' border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none  focus:border-violet-500'
                                onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='w-1/2 py-2 m-2'>
                            <label for='surnames'>Apellidos</label>
                            <input
                                type="text"
                                className=' border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500 '
                                onChange={(e) => setLastName(e.target.value)} />
                        </div> 
                    </div>
                    <div className='py-2 m-2'>
                        <label for='email'>Email</label>
                        <input
                            type="text"
                            className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>   
                    <div className='w-1/2 py-2 m-2'>
                        <label for='credit'>Monto crédito</label>
                        <div className='flex'>
                            <div className=' flex items-center py-2 px-2 bg-gray-400  text-white rounded'>MXN</div>
                            <input
                                type="number"
                                placeholder='0.00'
                                className='border order-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500'
                                onChange={(e) => setCredit(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='space-x-4 py-2 m-2'>
                        <button onClick={() => postUsers(addUser())}>Aceptar</button>
                        <button onClick={() => handleClickNew(false)}>Cancelar</button>  
                    </div>                    
            </form>
            }
        </>
    )
}

export default NewClient