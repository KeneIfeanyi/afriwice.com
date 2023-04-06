import React from "react";
import {hrline, aboutwrapper, aboutcontent, aboutbutton, aboutbody} from './components.module.css'


const AboutPage = () => {
    return(
        <div>
            <div className={aboutbody} id="about">
                <h1>About Us</h1>
                <hr className={hrline}/>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>          
        
            <div className={aboutwrapper}>
                <div className={aboutcontent}>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                    </h3>
                    <p>ICON Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <p>ICON Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <p>ICON Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>

                <div className={aboutcontent}>
                    <h3>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h3>
                    <button className={aboutbutton}>Learn More</button>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default AboutPage;