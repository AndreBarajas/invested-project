import React from "react";
import updateUser from "../api/updateUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ModalEdit = ({ handleOpenModal, openModal, editUser }) => {

    const navigate = useNavigate();

      const [updatedInfo, setUpdatedInfo] = useState({
        name: editUser.name,
        lastName: editUser.lastName,
        email: editUser.email,
      })
   

    const handleUpdate = (event, userId, updatedInfo) => {
        event.preventDefault();
        handleOpenModal(false)
        // navigate('/')
        updateUser(userId, updatedInfo)

    }

    const handleInput = (event) => {
        setUpdatedInfo({...updatedInfo, [event.target.name]: event.target.value})
    }

    console.log('updatedInfo', updatedInfo, editUser.id)

    return (
        <div >
            {openModal && 
                <div className='h-screen w-full fixed left-0 top-0 flex justify-center bg-black  bg-opacity-70'>
                    <form
                        onSubmit={(e) => handleUpdate(e, editUser.id, updatedInfo)}
                        className='bg-white font-display w-1/3 h-96 rounded-lg mt-40 '>
                            <h4 className='text-left p-8 text-2xl font-semibold'>Editar usuario</h4>
                            <div className='flex space-x  py-2'>
                                <div className='w-1/2 py-2 m-2'>
                                    <label for='name'>Nombre</label>
                                <input
                                    defaultValue={editUser.name || ''}
                                    type="text"
                                    className=' border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none  focus:border-violet-500'
                                    name="name"
                                    onChange={(e) => handleInput(e)}
                                />
                                </div>

                                <div className='w-1/2 py-2 m-2'>
                                    <label for='surnames'>Apellidos</label>
                                <input
                                     defaultValue={editUser.lastName || ''}
                                     type="text"
                                     className=' border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500 '
                                    name="lastName"
                                    onChange={(e) => handleInput(e)}
                                />
                                </div>
                            </div>
                            <div className='py-2 m-2'>
                                <label for='email'>Email</label>
                            <input
                                defaultValue={editUser.email || ''}
                                type="text"
                                className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500'
                                name="email"
                                onChange={(e) => handleInput(e)}
                            />
                            </div>

                            <div className='space-x-4 py-2 m-2'>
                            <button
                                    type="submit"
                                    className='bg-green-600 hover:bg-green-700 px-3 py-3 rounded text-white'
                            >Aceptar</button>
                            <button
                                    type="button"
                                    className='bg-red-600 hover:bg-red-700 px-3.5 py-3.5 rounded text-white'
                                    onClick={() => handleOpenModal(false)}>Cancelar</button>
                            </div>
                        </form>
                        ))          
                </div>
           }
        </div >
    )
}

export default ModalEdit;