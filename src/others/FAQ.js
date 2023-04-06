import * as React from 'react'
import {faq, faqbody, dropdown, dropdowncontent} from './components.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const FAQSection = () => {
    return(
        <div>
            <div className={faq}>
                    <div className={faqbody}>
                        <h1>Frequently asked questions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Duis aute irure dolor in reprehenderit
                        </p>
                        <div className={dropdown}>
                            <span>
                                Non consectetur a erat nam at lectus urna duis?
                            </span>
                            <div className={dropdowncontent}>
                                Feugiat pretium nibh ipsum consequat. 
                                Tempus iaculis urna id volutpat lacus laoreet non 		
                                curabitur gravida. Venenatis lectus magna 
                                fringilla urna porttitor rhoncus dolor purus non.
                            </div>
                        </div>
                        <div className={dropdown}>
                            <span>
                                Non consectetur a erat nam at lectus urna duis?
                            </span>
                            <div className={dropdowncontent}>
                                Feugiat pretium nibh ipsum consequat. 
                                Tempus iaculis urna id volutpat lacus laoreet non 		
                                curabitur gravida. Venenatis lectus magna 
                                fringilla urna porttitor rhoncus dolor purus non.
                            </div>
                        </div>
                        <div className={dropdown}>
                            <span>
                                Non consectetur a erat nam at lectus urna duis?
                            </span>
                            <div className={dropdowncontent}>
                                Feugiat pretium nibh ipsum consequat. 
                                Tempus iaculis urna id volutpat lacus laoreet non 		
                                curabitur gravida. Venenatis lectus magna 
                                fringilla urna porttitor rhoncus dolor purus non.
                            </div>
                        </div>
                    </div>
                    <div className={faqbody}>
                        <StaticImage src='../images/faq.jpg'/>
                    </div>
                </div>

        </div>
    )
  }

  export default FAQSection;