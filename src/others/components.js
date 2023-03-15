import * as React from 'react'
import { Link} from 'gatsby'
import { navbar, body, btn, navbarUl, navbarLi, afriwise,} from './components.module.css'

const Navbar = () => {
    return(
        <div className={body}>
                <div className={navbar}>
                    <h1 className={afriwise}>Afriwice</h1>
                        <ul className={navbarUl}>
                            <li className={navbarLi}>Home</li>
                            <li className={navbarLi}>About</li>
                            <li className={navbarLi}>Services</li>
                            <li className={navbarLi}>Portfolio</li>
                            <li className={navbarLi}>Pricing</li>
                            <li className={navbarLi}>Drop down</li>
                            <li className={navbarLi}>Contact</li>
                        </ul>
                    <button className={btn}>Get Started</button>
                </div>
        </div>
    )
}

export default Navbar;