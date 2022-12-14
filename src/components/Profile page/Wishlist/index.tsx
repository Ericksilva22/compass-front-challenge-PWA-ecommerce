import Img_wishlist from '../../../assets/Images/Profile Page/art-wishlist.png'
import Img_arrow_mob from '../../../assets/Images/Category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button } from './wishlist'
import { Div_content, Div_none } from '../My Orders/orders'
import SideMenu from '../main/nav'

function Wishlist() {
    return (
        <section>
            <Header_mobile>
                <a href="./profile.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>My Wishlist</H1_main>
            </Header_mobile>
            <Div_content>
                <Div_none>
                    < SideMenu />
                </Div_none>
            
                <Main>
                    <figure>
                        <img src={Img_wishlist} alt="" />
                    </figure>
                    <h3>Well...</h3>
                    <p>It seems you have not added any products to for wishlist. </p>
                    <Button>
                        <a href="./home page.html">Start Shopping</a>
                    </Button>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default Wishlist