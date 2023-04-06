import * as React from 'react'
import { pricing, pricingcontent, pricingmain, pricingbody, hrline, btnpricing, btnpricing1, btnpricing2, dollarprice} from './components.module.css'

const Price = () => {
    return(
        <div>
            <div className={pricingbody} id='pricing'>
                <div className={pricingmain}>
                    <h1>Pricing</h1>
                    <hr className={hrline}/>
                    <h3>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                        Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </h3>
                    <div className={pricing}>
                            <div className={pricingcontent}>
                                <h3>Free</h3>
                                <span><sup>$</sup> </span><span className={dollarprice}>0</span><span>/ month</span>
                                <p>Aida dere</p>
                                <p>Nec feugiat nisl</p>
                                <p>Nulla at volutpat dola</p>
                                <p>Pharetra massa</p>
                                <p>Massa ultricies mi</p>
                                <button className={btnpricing1}>Buy Now</button>
                            </div>
                            <div className={pricingcontent}>
                                <button className={btnpricing2}>Recommended</button>
                                <h3>Business</h3>
                                <span><sup>$</sup> </span><span className={dollarprice}>19</span><span>/ month</span>
                                <p>Aida dere</p>
                                <p>Nec feugiat nisl</p>
                                <p>Nulla at volutpat dola</p>
                                <p>Pharetra massa</p>
                                <p>Massa ultricies mi</p>
                                <button className={btnpricing}>Buy Now</button>
                            </div>
                            <div className={pricingcontent}>
                                <h3>Developer</h3>
                                <span><sup>$</sup> </span><span className={dollarprice}>29</span><span>/ month</span>
                                <p>Aida dere</p>
                                <p>Nec feugiat nisl</p>
                                <p>Nulla at volutpat dola</p>
                                <p>Pharetra massa</p>
                                <p>Massa ultricies mi</p>
                                <button className={btnpricing1}>Buy Now</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Price;