import React from "react";
import updateUser from "../api/updateUser";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getUserToEdit from "../api/getUserToEdit";


const ModalEdit = ({editUser}) => {

    // const [editUser, setEditUser] = useState([])
    
    // useEffect = () => {
    //     getUserToEdit().then(setEditUser)   
    // }

      const [updatedInfo, setUpdatedInfo] = useState({
        name: editUser.name,
        lastName: editUser.lastName,
        email: editUser.email,
      })
   

    const handleUpdate = (event, userId, updatedInfo) => {
        event.preventDefault();
        // handleOpenModal(false)
        updateUser(userId, updatedInfo)
    }

    const handleInput = (event) => {
            setUpdatedInfo({...updatedInfo, [event.target.name]: event.target.value})

    }

    console.log('updatedInfo', updatedInfo, editUser.id)

    return (
        <div >
          
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
                                // onSubmit={() => handleInput(editUser.id, updatedInfo)}
                            >Aceptar</button>
                            <Link
                                    to={'/'}
                                    type="button"
                                    className='bg-red-600 hover:bg-red-700 px-3.5 py-3.5 rounded text-white'
                                    >Cancelar</Link>
                            </div>
                        </form>
                        ))          
                </div>
        </div >
    )
}

export default ModalEdit;