import React from 'react'
import updateUser from '../api/updateUser'
import {useState} from 'react'


const CreditUser = ({ handleViewCredit, openModal, creditUser }) => {
 
    const [amountCredit, setAmountCredit] = useState([])
  
    const [updatedPay, setUpdatedPay] = useState({
        credit: {
            amount: amountCredit.amount,
            // payment: creditUser.credit[0].payment,
        }
    })
    // console.log("datos de un usario", updatedPay)

    const handleInput = (event) => {
        setUpdatedPay({ ...updatedPay, [event.target.name]: event.target.value })
        setAmountCredit(creditUser.credit)
    }

    const handleUpdatePay = (event, userId, paymentToUpdate) => {
        event.preventDefault();
        updateUser(userId, paymentToUpdate)
        handleViewCredit(false)
    }

    
    return(
        <div >
            {openModal &&
              
                <div className='h-screen w-full fixed left-0 top-0 flex justify-center bg-black  bg-opacity-70'>
                    <form
                        onSubmit={(e)=> handleUpdatePay(e, creditUser.id, handleInput )}
                        className="bg-white font-display w-1/3 h-96 rounded-lg mt-40">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill h-7 w-7 m-4" viewBox="0 0 16 16" onClick={() => handleViewCredit(false)}>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                        </div>
                        
                            <div className='w-2/3 ml-20 mt-10'>
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-m font-semibold inline-block py-1 px-2 uppercase rounded-full text-violet-600 bg-violet-200">
                                            Pagos {creditUser.name}
                                        </span>
                                    </div>
                             
                                    <div className="text-right">
                                        <span className="text-m font-semibold inline-block text-violet-600">
                                           ${creditUser.amount}
                                        </span>
                                    </div>
                             
                                </div>
                            
                                <div className="overflow-hidden h-5 mb-4 text-m flex rounded bg-violet-200">
                                    <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-500"></div>
                                </div>

                                <div className='w-full py-2 m-2'>
                                    <label htmlFor='credit'>Agregar pago</label>
                                    <div className='flex'>
                                        <div className=' flex items-center py-2 px-2 bg-gray-400  text-white rounded'>MXN</div>
                                        <input
                                            type="number"
                                            placeholder='0.00'
                                            className='border order-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-violet-500'
                                            name='payment'
                                            onChange={(e) => handleInput(e)}
                                        />
                                    </div>
                                </div>

                                <div className='flex justify-end space-x-4 py-2'>
                                    <button
                                        type="submit"
                                        className='bg-green-600 hover:bg-green-700 px-3 py-3 rounded text-white'
                                    >Agregar pago</button>
                                    <button
                                        type="button"
                                        className='bg-red-600 hover:bg-red-700 px-3.5 py-3.5 rounded text-white'
                                        onClick={() => handleViewCredit(false)}>Cancelar</button>
                                </div>
                            </div>
                     </form> 
                </div>
            }
        </div >

)
 
}

export default CreditUser;