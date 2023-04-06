import * as React from 'react'
import {content, contentoverlay, contenttext, contentbutton} from './components.module.css'

const Img = () => {
    return(
       <div className={content}>
            <div className={contentoverlay}>
                  <div className={contenttext}>
                     <h1> Call To Action </h1>
                     <h3>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <br/>
                     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </h3>
                     <button className={contentbutton}><h3>Call To Action</h3></button>
                  </div>
            </div>
       </div>
    )
  }

  export default Img;