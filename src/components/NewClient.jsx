import { useState } from 'react';
import postUsers from '../api/postUsers';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const NewClient = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [credit, setCredit] = useState('')

    const addUser = () => {
        const newUsers = { name: name, lastName: lastName, email: email, amount: credit, payment: '0.00' }
        navigate('/')
        return newUsers;
    }

    return (
        <section className='bg-violet-200 h-screen font-display ' >
            <Navbar />
            <div className='ml-96'>
                <div className='flex items-center pl-1 '>
                    <h1 className=' text-3xl font-normal p-8'>Agregar nuevo usuario</h1>

                </div>
                <div className='border border:gray-600 bg-slate-50  w-2/3 rounded-lg font-display '>
                    <div className='flex space-x  py-2'>
                        <div className='w-1/2 py-2 m-2'>
                            <label htmlFor='name'>Nombre</label>
                            
                            <input
                                type="text"
                                className=' border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none  focus:border-violet-500'
                                onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='w-1/2 py-2 m-2'>
                            <label htmlFor='surnames'>Apellidos</label>
                            <input
                                type="text"
                                className=' border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500 '
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className='py-2 m-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="text"
                            className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-1/2 py-2 m-2'>
                        <label htmlFor='credit'>Monto crédito</label>
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
                    <div className=' flex justify-end space-x-4 py-2 m-2'>
                        <button
                            className='bg-green-600 hover:bg-green-700 px-3 py-3 rounded text-white'
                            onClick={() => postUsers(addUser())}>Aceptar</button>
                        <Link
                            to={'/'}
                            className=' bg-red-600 hover:bg-red-700 px-3 py-3 rounded text-white'
                        >Cancelar</Link>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default NewClient