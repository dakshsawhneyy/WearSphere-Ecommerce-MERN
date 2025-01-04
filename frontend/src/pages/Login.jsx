import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

    const [currState, setcurrState] = useState('Login')
    
    const { token,setToken,backendUrl } = useContext(ShopContext) 
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // We will call login api so first making three state vairiable to store value of name,email and password
            if(currState === 'Sign Up'){
                // we will call signup api
                const response = await axios.post(backendUrl + '/api/user/register', {
                    name,
                    email,
                    password,
                });
                console.log(response.data);
                
            }else{
                // We will call login api
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center m-auto h-[80%] mt-28 sm:mt-36 mb-36'>
        <div className='flex items-center gap-3'>
            <p className='prata-regular text-black text-3xl'>{currState}</p>
            <hr className='border-none h-1 w-10 rounded bg-black' />
        </div>
        {currState === 'Login' ? "" : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className={`p-3 mt-12 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2`}  placeholder='Name' required/> }
        {currState === 'Login' ? <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className='p-3 mt-12 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2' placeholder='Email' required/> : <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className='p-3 mt-4 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2' placeholder='Email' required/> }
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='p-3 mt-4 w-[80%] sm:w-[50%] lg:w-[35%] text-black border-2' placeholder='Password' required/>
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
