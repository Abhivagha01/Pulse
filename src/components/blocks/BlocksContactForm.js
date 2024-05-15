import React from 'react'
import HeroSection from '../global/HeroSection'
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import ContactForm from '../global/ContactForm';

const BlocksContactForm = () => {
  return (
    <>
      <HeroSection Titale={"Contact Form"} url={background} />
      <ContactForm />
    </>
  );
}

export default BlocksContactForm
