import React from "react";
import {servicewrapper, servicecontent, servicebody, servicebodymain, hrline, greenbody} from './components.module.css'

const Service = () => {
    return(
        <div className={servicebody} id='services'>
            <div className={servicebodymain}>
                    <h1>Services</h1>
                    <hr className={hrline}/>
                    <h3>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                        Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </h3>
                    <div className={servicewrapper}>
                        <div className={servicecontent}>
                                <div className={greenbody}>
                                    <h1>ICONS</h1>
                                    <h2>Lorem Ipsum</h2>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                        </div>
                        
                        <div className={servicecontent}>
                            <div className={greenbody}>
                                <h1>ICONS</h1>
                                <h2>Sed ut perspiciatis</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div className={servicecontent}>
                            <div className={greenbody}>
                                <h1>ICONS</h1>
                                <h2>Sed ut perspiciatis</h2>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>
                    </div>

                    <div className={servicewrapper}>
                        <div className={servicecontent}>
                                <div className={greenbody}>
                                    <h1>ICONS</h1>
                                    <h2>Nemo Enim</h2>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        theyebd thiur updlion
                                    </p>
                                </div>
                        </div>

                            <div className={servicecontent}>
                                <div className={greenbody}>
                                    <h1>ICONS</h1>
                                    <h2>Dele cardo</h2>
                                    <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                </div>
                            </div>

                            <div className={servicecontent}>
                                <div className={greenbody}>
                                    <h1>ICONS</h1>
                                    <h2>Divera don</h2>
                                    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur
                                     theyebd thiur updlion
                                    </p>
                                </div>
                            </div>                          
                    </div>
                </div>
        </div>
    )
}

export default Service;