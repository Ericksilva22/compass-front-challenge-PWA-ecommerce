import Img_book from '../../../assets/Images/Profile Page/art-book.png'
import Img_arrow_mob from '../../../assets/Images/Category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button } from './book'
import { Div_content, Div_none } from '../My Orders/orders'
import SideMenu from '../main/nav'

function Book() {
    return (
        <section>
            <Header_mobile>
                <a href="./profile.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>My Adress Book</H1_main>
            </Header_mobile>
            <Div_content>
                <Div_none >
                    <SideMenu/>
                </Div_none >
            
                <Main>
                    <figure>
                        <img src={Img_book} alt="" />
                    </figure>
                    <h3>No Adress</h3>
                    <p>It seems you have not added any products to for wishlist. </p>
                    <Button>
                        <a href="./addAdress.html">Add Adress</a>
                    </Button>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default Book