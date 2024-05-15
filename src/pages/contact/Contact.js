import React from 'react'
import ContactCard from '../../components/contact/ContactCard'
import ContactMap from '../../components/contact/ContactMap'
import HeroSection from '../../components/global/HeroSection'
import background from "../../assets/images/contact/bg-image-17.jpg"
import AboutBrand from '../../components/about/AboutBrand'
import ContactForm from '../../components/global/ContactForm'

const Contact = () => {
  return (
    <>
      <HeroSection Titale={"Contact With Us"} url={background} />
      <ContactCard />
      <ContactForm />
      <ContactMap />
      <AboutBrand />
    </>
  );
}

export default Contact
