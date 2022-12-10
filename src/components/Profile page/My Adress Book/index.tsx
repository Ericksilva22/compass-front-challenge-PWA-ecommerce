import Img_book from '../../../assets/Images/Profile Page/art-book.png'
import Img_arrow_mob from '../../../assets/Images/Category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button } from './book'

function Book() {
    return (
        <section>
            <Header_mobile>
                <a href="./profile.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>My Adress Book</H1_main>
            </Header_mobile>
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
        </section>
        
      
    )
 }
 
 export default Book