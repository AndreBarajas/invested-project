import logo from '../images/logo.png'

const SideBanner = () => {

    return (
        <div className='bg-indigo-600 h-screen w-64 fixed ' > 
            <div className='p-2.5 ml-10 w-40 h-40 '>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-200'>
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill w-5 h-5" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg> 
                </i>
                <span className='text-[20px] ml-4 text-black-200'>Clientes</span>
            

            </div>  
        </div>
    )
}; 

export default SideBanner; 