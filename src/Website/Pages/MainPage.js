import React from 'react'
import '../Assets/Css/web.css'
import Header from '../Containers/Header/Header'
import Banner from '../Containers/Banner/Banner'
import About from '../Pages/About'

function MainPage() {
    return (
        <main>
            <Header />
            <Banner />
            <br className='py-5'/>
            <About />
        </main>
    )
}

export default MainPage