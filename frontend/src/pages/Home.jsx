import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import OurPolicy from '../components/Ourpolicy'
import SubscribeDiscount from '../components/SubscribeDiscount'

const Home = () => {
return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSellers/>
        <OurPolicy/>
        <SubscribeDiscount/>
    </div>
)
}

export default Home
