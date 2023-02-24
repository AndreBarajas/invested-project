import { useState } from 'react';
import postUsers from '../api/postUsers';

const NewClient = ({ stateModal, handleClickNew }) => { 

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const addUser = () => {
        const newUsers = { name: name, lastName: lastName, email: email }
        handleClickNew(false)
        return newUsers;
    }

   
    return (
        <>
            {stateModal && 
            <div className='ml-64'>
                    <div>
                        <input type="text" placeholder='Nombre' onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" placeholder='Apellidos' onChange={(e) => setLastName(e.target.value)} />
                        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => postUsers(addUser())}>Aceptar</button>
                        <button onClick={() => handleClickNew(false)}>Cancelar</button>  
                    </div>                    
            </div>
            }
        </>
    )
}

export default NewClient