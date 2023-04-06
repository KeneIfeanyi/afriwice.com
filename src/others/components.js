import * as React from 'react'
// import {Link} from 'gatsby'
import { navbar, body, btn, navbarUl, navbarLi, afriwise,} from './components.module.css'

const Navbar = () => {
    return(
        <div className={body}>
                <div className={navbar}>
                    <h1 className={afriwise}>Afriwice</h1>
                        <ul className={navbarUl}>
                            <li className={navbarLi}><a href='#home'>Home</a></li>
                            <li className={navbarLi}><a href='#about'>About</a></li>
                            <li className={navbarLi}><a href='#services'>Services</a></li>
                            <li className={navbarLi}><a href='#portfolio'>Portfolio</a></li>
                            <li className={navbarLi}><a href='#pricing'>Pricing</a></li>
                            <li className={navbarLi}><a href='#dropdown'>Drop down</a></li>
                            <li className={navbarLi}><a href='#contact'>Contact</a></li>
                        </ul>
                    <button className={btn}>Get Started</button>
                </div>
        </div>
    )
}

export default Navbar;