import React from "react";
import { aboutwrapper, aboutwrappercontent, aboutpage} from './components.module.css'

const AboutPage = () => {
    return(
        <div className={aboutpage}>
            <h1>About Us</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <div className={aboutwrapper}>
                <div className={aboutwrappercontent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>
                <div className={aboutwrappercontent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>
            </div>
        </div>
    )
}

export default AboutPage;