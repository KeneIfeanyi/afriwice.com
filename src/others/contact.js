import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import { Contact1, contactpage, contact, contactform, contacttext, input1, input2, input3, input4, input5 } from './components.module.css'
// import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => {
    return(
           <div>
                <div> 
                    <div className={contactpage} id='contact'>
                        <h1>Contact</h1>
                            <h3 className={contacttext}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                                Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </h3>    
                    </div>

                    <iframe  className={Contact1} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                        frameborder="0">
                    </iframe>      
                </div>

                <div className={contact}>
                    <div className={ contactform }>
                        <h1>Location</h1>
                        <p>A108 Adam Street, New York, NY 535022</p>

                        <h1>Email</h1>
                        <p>info@example.com</p>

                        <h1>Call</h1>
                        <p>+1 5589 55488 55s</p>
                    </div>

                    
                    <div className={ contactform }>
                        <input placeholder='Your Name' className={input1}/>
                        <input placeholder='Your Email' className={input2}/>
                        <input placeholder='subject' className={input3}/>
                        <textarea placeholder='Message' className={input4}/>
                        <button className={input5}>Send Message</button>
                    </div>
                </div>
            </div>
    )
  }

  export default Contact;