import React from 'react'
import updateUser from '../api/updateUser'
import { useState } from 'react'


const CreditUser = ({ handleIncreaseCredit, openIncrease, creditUser }) => {

    const [dato, setDato] = useState([])
    

    const [increaseCredit, stateIncreaseCredit] = useState([{
        credit: {
            amount: dato.amount
        }
    }
    ])

    console.log("increaseCredit", increaseCredit)
 
    const handleChangeCredit = (e) => {
        stateIncreaseCredit({ ...increaseCredit, [e.target.name]: e.target.value })
        setDato(creditUser.credit)
    }

    const handleUpdateCredit = (userId, increaseCredit) => {
        stateIncreaseCredit()
        updateUser(userId, increaseCredit )
    }


    return (
        <div >
            {openIncrease &&
                <div className='h-screen w-full fixed left-0 top-0 flex justify-center bg-black  bg-opacity-70'>
                    <form
                        className="bg-white font-display w-1/3 h-96 rounded-lg mt-40">
                    
                        <div className='w-2/3 ml-20 mt-10'>

                            <div className="flex-column mb-2 items-center justify-between">
                            <div className='w-full py-2 m-2'>
                                <label htmlFor='credit'>Monto nuevo crédito</label>
                                <div className='flex'>
                                    <div className=' flex items-center py-2 px-2 bg-gray-400  text-white rounded'>MXN</div>
                                    <input
                                        type="number"
                                        placeholder='0.00'
                                        className='border order-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500'
                                        name='amount'
                                        onChange={(e) => handleChangeCredit(e)}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-end space-x-4 py-2'>
                                <button
                                    type="submit"
                                    className='bg-green-600 hover:bg-green-700 px-3 py-3 rounded text-white'
                                    
                                    onClick={() => handleUpdateCredit(creditUser.id)}
                                    >Agregar crédito</button>
                                <button
                                    type="button"
                                    className='bg-red-600 hover:bg-red-700 px-3.5 py-3.5 rounded text-white'
                                    onClick={()=>handleIncreaseCredit(false)}>Cancelar</button>
                            </div>
                             </div>
                        </div>
                    </form>
                </div>
            }
        </div >

    )

}

export default CreditUser;