import * as React from 'react'
import {wrapper3, wrappercontent3, text} from './components.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Keyboard = () => {
    return(
        <div>
            <div className={wrapper3}>
                <div className={wrappercontent3}>
                    <p>
                        <h3>Est labore ad</h3>
                            <h4 className={text}>Consequuntur sunt aut quasi enim 
                            aliquam quae harum pariatur laboris nisi ut aliquip</h4>
                    </p>
                    <p>
                        <h3>Harum esse qui</h3>
                            <h4 className={text}>Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt</h4>
                    </p>
                    <p>
                        <h3>Aut occaecati</h3>
                            <h4 className={text}>Aut suscipit aut cum nemo deleniti aut omnis. 
                            Doloribus ut maiores omnis facere</h4>
                    </p>
                    <p>
                        <h3>Beatae veritatis</h3>
                            <h4 className={text}>Expedita veritatis consequuntur nihil 
                            tempore laudantium vitae denat pacta</h4>
                    </p>
                </div>
                <div className={wrappercontent3}>
                    <StaticImage src='../images/features.jpg'/>
                </div>
            </div>
        </div>
    )
  }

  export default Keyboard;