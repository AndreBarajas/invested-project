import React from 'react'


const CreditUser = ({openModal,creditUser }) => {


    return(
        <div >
            {openModal &&
                <div className='h-screen w-full fixed left-0 top-0 flex justify-center bg-black  bg-opacity-70'>
                    <form className='bg-white font-display w-1/3 h-96 rounded-lg mt-40 '>

                        <label
                            max={creditUser.amount}
                            >Pagos</label>
                        <progress >                   

                        </progress> 
                    </form>
                </div>
            }
        </div >

)
 
}

export default CreditUser;