import React from 'react'

const SubscribeDiscount = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
return (
    <div className='text-center'>
        <p className='text-gray-800 text-3xl font-semibold'>Subscribe now & get 20% off</p>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, suscipit perferendis</p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 pl-3 flex mx-auto my-10' action="">
            <input className='p-2 outline-none border w-full text-black' type="text" placeholder='Enter your email' required/>
            <button className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
)
}

export default SubscribeDiscount
