import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import SubscribeDiscount from '../components/SubscribeDiscount'

const About = () => {
return (
    <div className='h-[80%] flex flex-col border-t-2 mt-2 gap-10'>
        <div className='mt-12 text-center'>
            <Title text1={'ABOUT'} text2={'US'} />
        </div>
        <div className='flex flex-col sm:flex-row sm:w-full gap-10'>
            <img className='w-full sm:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='text-gray-600 mt-8 flex flex-col gap-10'>
                <p className='sm:w-[80%]'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                <p className='sm:w-[80%]'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                <p className='sm:w-[80%] text-xl text-black font-bold'>OUR MISSION</p>
                <p className='sm:w-[80%]'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
        </div>
        <div className='mt-10 mb-8'>
            <div className='text-center'>
                <Title text1={"WHY"} text2={"CHOOSE US"} />
            </div>
            <div className='flex flex-col sm:flex-row mt-6'>
                <div className='flex flex-col 1/3 border-2 px-10 py-10 border-b-0 sm:border-b-2 sm:border-r-0'>
                    <p className='text-gray-700 font-bold'>Qualtiy Assurance:</p>
                    <p className='text-gray-600 mt-4'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='flex flex-col 1/3 border-2 px-10 py-10'>
                    <p className='text-gray-700 font-bold'>Convenience:</p>
                    <p className='text-gray-600 mt-4'>With our user-friendly interface and hassle- free ordering process, shopping has never been easier.</p>
                </div>
                <div className='flex flex-col 1/3 border-2 px-10 py-10 border-t-0 sm:border-t-2 sm:border-l-0'>
                    <p className='text-gray-700 font-bold'>Exceptional Customer Service</p>
                    <p className='text-gray-600 mt-4'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>
        </div>
        <SubscribeDiscount />
    </div>
)
}

export default About



// 

// 