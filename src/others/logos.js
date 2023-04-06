import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {wrapper4, wrappercontent4, imgsize,main} from './components.module.css'

const Logo = () => {
    return(
        <div className={main}>
            <div className={wrapper4}>
                <div className={wrappercontent4}><StaticImage src='../images/client-1.png' className={imgsize}/></div>
                <div className={wrappercontent4}><StaticImage src='../images/client-2.png' className={imgsize}/></div>
                <div className={wrappercontent4}><StaticImage src='../images/client-3.png' className={imgsize}/></div>
                <div className={wrappercontent4}><StaticImage src='../images/client-4.png' className={imgsize}/></div>               
            </div>
            <div className={wrapper4}>
                <div className={wrappercontent4}><StaticImage src='../images/client-5.png' className={imgsize}/></div>
                <div className={wrappercontent4}><StaticImage src='../images/client-6.png' className={imgsize}/></div>
                <div className={wrappercontent4}><StaticImage src='../images/client-7.png' className={imgsize}/></div>
                <div className={wrappercontent4}><StaticImage src='../images/client-8.png' className={imgsize}/></div> 
            </div>              
        </div>
    )
  }  

export default Logo;