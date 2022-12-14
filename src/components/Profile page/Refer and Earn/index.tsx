import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import Img_no_profile from '../../../assets/Images/Profile Page/no-profile-picture.jpg'
import Img_button_logout from '../../../assets/Images/Profile Page/logout.svg'
import Img_refer from '../../../assets/Images/Profile Page/art.png'
import Img_arrow_mob from '../../../assets/Images/Category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button } from './refer'
import { Div_content, Div_none } from '../My Orders/orders'
import SideMenu from '../main/nav'

function Refer() {
    return (
        <section>
            <Header_mobile>
                <a href="./profile.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>Refer and Earn</H1_main>
            </Header_mobile>
            <Div_content>
                <Div_none>
                    <SideMenu />
                </Div_none>
                
                <Main>
                    <figure>
                        <img src={Img_refer} alt="" />
                    </figure>
                    <h3>Invite your friend and earn $20 on every invite</h3>
                    <p>IVN6374730</p>
                    <h4>Tap to copy the code.</h4>
                    <div>
                        <h5>How does this works?</h5>
                        <ul>
                            <li>Invite your friends to CORAL</li>
                            <li>Ask your friends to place their order with your code & get $20 discount</li>
                            <li>Once the order gets delivered you get the discount as well.</li>
                        </ul>
                    </div>
                    <Button>Invite now</Button>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default Refer