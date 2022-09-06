import React from 'react'
import { Carousel } from 'react-bootstrap';
import Slide1 from '../../Assets/WebImages/Banner/main1.jpg'
import Slide2 from '../../Assets/WebImages/Banner/main2.jpg'
import Slide3 from '../../Assets/WebImages/Banner/main3.jpg'


import '../../Assets/Css/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Banner() {
    return (
        <Carousel_ />

    )
}


function Carousel_() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={Slide2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slide3}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}


export default Banner