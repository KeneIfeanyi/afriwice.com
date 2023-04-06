import * as React from 'react'
import Navbar from '../others/components'
import AboutPage from '../others/about.js'
import Service from '../others/services'
import Img from '../others/img'
import Keyboard from '../others/keyboard'
import Logo from '../others/logos'
import Img2 from '../others/img2'
import Port from '../others/portfolio'
import Price from '../others/pricing'
import Contact from '../others/contact'
import Foot from '../others/footer'
import FAQSection from '../others/FAQ'
import HomeImg from '../others/home'


const Body = () => {
  return(
    <>
      <Navbar />
      <HomeImg/>
      <AboutPage />
      <Service />
      <Img/>
      <Keyboard/>
      <Logo/>
      <Img2/>
      <Port/>
      <Price/>
      <FAQSection/>
      <Contact/>
      <Foot/>
    </>
  )
}

export default Body;

