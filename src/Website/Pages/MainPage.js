import React from 'react'
import Header from '../Containers/Header/Header'
import Banner from '../Containers/Banner/Banner'
import Footer from '../Containers/Footer/Footer'
import About from '../Pages/About'
import OurTeam from '../Pages/OurTeam'
import Why from '../Pages/Why'
import ContactUs from '../Pages/ContactUs'
import '../Assets/Css/web.css'

function MainPage() {
    return (
        <main>
            <Header />
            <Banner />
            <About />
            <OurTeam />
            <Why />
            <ContactUs />
            <Footer />
        </main>
    )
}

export default MainPage