import React, { useState } from 'react'

const Login = () => {

    const [currState, setcurrState] = useState('Login')

    const handleSubmit = async(e) => {
        e.preventDefault();
    }

return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center m-auto h-[80%] mt-28 sm:mt-36 mb-36'>
        <div className='flex items-center gap-3'>
            <p className='prata-regular text-black text-3xl'>{currState}</p>
            <hr className='border-none h-1 w-10 rounded bg-black' />
        </div>
        {currState === 'Login' ? "" : <input type="text" className={`p-3 mt-12 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2`} placeholder='Name' required/> }
        {currState === 'Login' ? <input type="text" className='p-3 mt-12 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2' placeholder='Email' required/> : <input type="text" className='p-3 mt-4 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2' placeholder='Email' required/> }
        <input type="text" className='p-3 mt-4 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2' placeholder='Password' required/>
        {currState === 'Sign Up' ? "" : <div className='w-[75%] sm:w-[48%] lg:w-[34%]'>
            <p className='text-black items-start text-sm mt-3 cursor-pointer'>Forgot your password?</p>
        </div>}
        {
            currState === 'Login' ?
            <div className='text-black mt-10 md:mt-10 w-[75%] sm:w-[48%] lg:w-[34%] items-center text-center'>
                <p onClick={()=>setcurrState('Sign Up')} className='cursor-pointer'>Don't have an account? Sign Up</p>
            </div>
            : 
            <div className='text-black mt-10 md:mt-10 w-[75%] sm:w-[48%] lg:w-[34%] items-center text-center'>
                <p onClick={()=>setcurrState('Login')} className='cursor-pointer'>Already have an account? LOGIN</p>
            </div>
        }
        <button className='bg-black text-white px-6 py-2 rounded mt-7 transition-all duration-300 hover:bg-gray-600 hover:scale-125'>{currState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
)
}

export default Login
