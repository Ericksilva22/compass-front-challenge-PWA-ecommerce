import Star1 from '../../../assets/Images/profile Page/Star.svg'
import Star2 from '../../../assets/Images/profile Page/Star (1).svg'
import arrow from '../../../assets/Images/profile Page/arrow-li.svg'
import ellipses_notification from '../../../assets/Images/home page/ellipses-notification.svg'
import Img_arrow_mob from '../../../assets/Images/category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Img_ellipses, Figure, Section_reviews } from './reviews'

function Reviews() {
    return (
        <section>
            <Header_mobile>
                <a href="./profile.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>My Reviews</H1_main>
                <Img_ellipses src={ellipses_notification} alt="" />
            </Header_mobile>
            <Main>
                <Section_reviews>
                    <div>
                        <p>16 december 2022</p>
                        <Figure>
                            <img src={Star1} alt="" />
                            <img src={Star1} alt="" />
                            <img src={Star1} alt="" />
                            <img src={Star1} alt="" />
                            <img src={Star2} alt="" />
                        </Figure>
                        <h3>GUCCI Colbar Handbag</h3>
                        <h4>Quality product with awesome accessories</h4>
                        <h5>Quality product with awesome accessories Quality product accessories ......</h5>
                    </div>
                    <img src={arrow} alt="" />
                </Section_reviews>

                <Section_reviews>
                    <div>
                        <p>16 december 2022</p>
                        <Figure>
                            <img src={Star1} alt="" />
                            <img src={Star1} alt="" />
                            <img src={Star1} alt="" />
                            <img src={Star2} alt="" />
                            <img src={Star2} alt="" />
                        </Figure>
                        <h3>GUCCI Colbar Handbag</h3>
                        <h4>Quality product with awesome accessories</h4>
                        <h5>Quality product with awesome accessories Quality product accessories ......</h5>
                    </div>
                    <img src={arrow} alt="" />
                </Section_reviews>
            </Main>
        </section>
        
      
    )
 }
 
 export default Reviews