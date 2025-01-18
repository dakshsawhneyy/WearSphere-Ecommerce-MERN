import React from 'react'

const Title = ({text1,text2}) => {
return (
    <div className='inline-flex items-center gap-2 text-xl sm:text-2xl'>
        <hr className='w-8 sm:w-12 h-1 border-none rounded bg-gray-700'/>
        <p className='text-gray-600'>{text1} <span className='text-gray-800'>{text2}</span> </p>
        <hr className='w-8 sm:w-12 h-1 border-none rounded bg-gray-700'/>
    </div>
)
}

export default Title
