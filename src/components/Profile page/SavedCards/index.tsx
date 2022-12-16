import Img_creditCard from '../../../assets/Images/Profile Page/creditCard.jpg'
import Img_arrow_mob from '../../../assets/Images/Category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button } from './savedCards'
import { Div_content, Div_none } from '../My Orders/orders'
import SideMenu from '../main/nav'

function SavedCards() {
    return (
        <section>
            <Header_mobile>
                <a href="./profile.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>My Saved Cards</H1_main>
            </Header_mobile>
            <Div_content>
                <Div_none >
                    <SideMenu/>
                </Div_none >
            
                <Main>
                    <figure>
                        <img src={Img_creditCard} alt="" />
                    </figure>
                    <h3>No Credit Card</h3>
                    <p>It seems you have not added any Credit card. </p>
                    <Button>
                        <a href="./checkout.html">Add Credit Card</a>
                    </Button>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default SavedCards