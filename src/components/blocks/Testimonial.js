import React from 'react'
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import HeroSection from '../global/HeroSection'
import AboutTestimonial from '../about/AboutTestimonial'

function Testimonial() {
    return (
        <div>
            <HeroSection Titale={"Testimonial"} url={background} />
            <AboutTestimonial />
        </div>
    )
}

export default Testimonial