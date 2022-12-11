import Banner_notification from '../../assets/Images/home Page/banner-notification.png'
import thumbsup_notification from '../../assets/Images/home page/icon-notification.svg'
import ellipses_notification from '../../assets/Images/home page/ellipses-notification.svg'
import Img_arrow_mob from '../../assets/Images/category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button, Img_ellipses, Img_thumbsup } from './notification'

function Notification() {
    return (
        <section>
            <Header_mobile>
                <a href="./home page.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>Notification</H1_main>
                <Img_ellipses src={ellipses_notification} alt="" />
            </Header_mobile>
            <Main>
                <figure>
                    <img src={Banner_notification} alt="" />
                </figure>
                
                <h3>Upto 50% OFF⚡⚡</h3>
                <p>This winter gift your loved ones. </p>
                <Button>
                    <a href="./Category pages/handbags/handbagsPage1.html">Shop Now</a>
                </Button>
                <Img_thumbsup src={thumbsup_notification} alt="" />
                <h3>Share your feedback</h3>
                <p>Hey, Tina. Thanks for using CORAL. You know what? You can help us improve with just one click</p>

                <Img_thumbsup src={thumbsup_notification} alt="" />
                <h3>Share your feedback</h3>
                <p>Hey, Tina. Thanks for using CORAL. You know what? You can help us improve with just one click</p>
            </Main>
        </section>
        
      
    )
 }
 
 export default Notification