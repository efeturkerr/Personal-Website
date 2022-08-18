import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar'
import HomeSection from '../../Components/HomeSection'
import Footer from '../../Components/Footer'

export default function Home() {
    return (
        <div className='homeContainer'>
            <Navbar />
            <HomeSection />
            <Footer />
        </div>
    )
}
