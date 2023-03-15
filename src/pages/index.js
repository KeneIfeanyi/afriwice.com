import * as React from 'react'
import Navbar from '../others/components'
import { StaticImage } from 'gatsby-plugin-image'
import AboutPage from '../others/componentabout.js'

const NavHeading = () => {
  return(
    <>
      <Navbar />
      <StaticImage src='../images/hero-bg.jpg' alt='bg pic'/>
      <AboutPage/>
    </>
  )
}

export default NavHeading;

