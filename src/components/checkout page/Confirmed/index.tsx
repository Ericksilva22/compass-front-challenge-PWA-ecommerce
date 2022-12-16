import Img_confirmed from '../../../assets/Images/Checkout Page/art-confirmed.png'
import Img_x_mob from '../../../assets/Images/Checkout Page/leading-icon.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button, ButtonOrder } from './confirmed'

function Confirmed() {
    return (
        <section>
            <Header_mobile>
                <a href="./home page.html">
                    <Img_arrow_mobile src={Img_x_mob} alt="" />
                </a>
                <H1_main>Order Placed</H1_main>
            </Header_mobile>
            <Main>
                <figure>
                    <img src={Img_confirmed} alt="" />
                </figure>
                <h3>Cheerio!!</h3>
                <p>The order has been placed. Thanks for shopping with us. You’ll soon recieve the tracking details. </p>
                <ButtonOrder>
                    <a href="./profile - Orders - items.html">View Order</a>
                </ButtonOrder>
                <Button>
                    <a href="./home page.html">Continue Shopping</a>
                </Button>
            </Main>
        </section>
        
      
    )
 }
 
 export default Confirmed