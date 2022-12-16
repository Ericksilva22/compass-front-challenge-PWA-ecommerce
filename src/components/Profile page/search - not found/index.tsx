import Img_notFound from '../../../assets/Images/Profile Page/art-not found.png'
import Img_arrow_mob from '../../../assets/Images/Category page/leading-icon_mob.svg'

import { H1_main, Img_arrow_mobile } from '../../Categoty page/handbags/page 1/mainHandbags'
import {Header_mobile, Main, Button } from './searchNotFound'
import { Div_content, Div_none } from '../My Orders/orders'
import SideMenu from '../main/nav'

function SearchNotFound() {
    return (
        <section>
            <Header_mobile>
                <a href="./profile.html">
                    <Img_arrow_mobile src={Img_arrow_mob} alt="" />
                </a>
                <H1_main>Search Results</H1_main>
            </Header_mobile>
            <Div_content>
                <Div_none >
                    <SideMenu/>
                </Div_none >
            
                <Main>
                    <figure>
                        <img src={Img_notFound} alt="" />
                    </figure>
                    <h3>Whoops!</h3>
                    <p>We coudn’t find what you’re looking for. Try something else. </p>
                    <Button>
                        <a href="./home page.html">Back to Home</a>
                    </Button>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default SearchNotFound