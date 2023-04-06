import * as React from 'react'
import { btnport, btnport1, btnportmain, container, galleryColumn, pricingmain, hrline,} from './components.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Port = () => {
    return(
        <div>
            <div className={pricingmain} id='portfolio'>
                <h1>Portfolio</h1>
                <hr className={hrline}/>
                <h3>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                    Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </h3>
                <div className={btnportmain}>
                    <button className={btnport1}>All</button>
                    <button className={btnport}>App</button>
                    <button className={btnport}>Card</button>
                    <button className={btnport}>Web</button>
                </div>
                <div className={container}>
                        <div className={galleryColumn}><StaticImage src='../images/portfolio-1.jpg'/></div>
                        <div className={galleryColumn}><StaticImage src='../images/portfolio-2.jpg'/></div>
                        <div className={galleryColumn}><StaticImage src='../images/portfolio-3.jpg'/></div>
                </div>
                <div className={container}>
                    <div className={galleryColumn}><StaticImage src='../images/portfolio-6.jpg'/></div>
                    <div className={galleryColumn}><StaticImage src='../images/portfolio-5.jpg'/></div>
                    <div className={galleryColumn}><StaticImage src='../images/portfolio-4.jpg'/></div>                    
                </div>
                <div className={container}>
                    <div className={galleryColumn}><StaticImage src='../images/portfolio-4.jpg'/></div>                                     
                    <div className={galleryColumn}><StaticImage src='../images/portfolio-8.jpg'/></div>
                    <div className={galleryColumn}><StaticImage src='../images/portfolio-9.jpg'/></div>
                </div>
            </div>    
        </div>
    )
  }

  export default Port;