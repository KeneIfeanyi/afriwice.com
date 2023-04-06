import * as React from 'react'
import {imgblack, imgtext, imgblackoverlay, imgblacknum} from './components.module.css'


const Img2 = () => {
    return(
        <div className={imgblack}>  
            <div className={imgblackoverlay}>   
                <div className={imgtext}>
                    <h1>What we have archieved so far</h1>
                    <h3>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</h3>
                </div>

                <div>
                    <div className={imgblacknum}>
                        <h1>232</h1>
                        <p>Client</p>
                    </div>
                    <div className={imgblacknum}>
                        <h1>434</h1>
                        <p>Client</p>
                    </div>
                    <div className={imgblacknum}>
                        <h1>567</h1>
                        <p>Client</p>
                    </div>
                    <div className={imgblacknum}>
                        <h1>465</h1>
                        <p>Client</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Img2;