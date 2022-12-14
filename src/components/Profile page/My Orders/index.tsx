import arrow_nav from '../../../assets/Images/Profile Page/Vector-arrow.svg'
import Img_arrow_mob from '../../../assets/Images/Category page/leading-icon_mob.svg'

import SideMenu from '../main/nav'
import {Icon_arrow, Div_options_Title, Div_options_TitleGray} from '../../Product page/main coach/mainCoach'
import {H1, Div_Titles, } from '../main/main'
import {Div_subtitles, Div_content, Main, Link_profile, Div_none, Search_orders, Div, Div_2, Div_3 } from './orders'
import { Img_arrow_mobile } from '../Add New Adress/newAdress'

function MainProfileOrders() {

    function completed() {
        const order_completed = document.querySelector<HTMLElement>("#order_completed")!;
        const order_Processing = document.querySelector<HTMLElement>("#order_Processing")!;
        const order_Cancelled = document.querySelector<HTMLElement>("#order_Cancelled")!;
  
        order_completed.style.backgroundColor = "#1B4B66";
        order_Processing.style.backgroundColor = "#F1F1F1";
        order_Cancelled.style.backgroundColor = "#F1F1F1";
  
        order_completed.style.color = "#FFFFFF";
        order_Processing.style.color = "#626262";
        order_Cancelled.style.color = "#626262";
     }
  
     function Processing() {
        const order_completed = document.querySelector<HTMLElement>("#order_completed")!;
        const order_Processing = document.querySelector<HTMLElement>("#order_Processing")!;
        const order_Cancelled = document.querySelector<HTMLElement>("#order_Cancelled")!;
  
        order_completed.style.backgroundColor = "#F1F1F1";
        order_Processing.style.backgroundColor = "#1B4B66";
        order_Cancelled.style.backgroundColor = "#F1F1F1";
  
        order_completed.style.color = "#626262";
        order_Processing.style.color = "#FFFFFF";
        order_Cancelled.style.color = "#626262";
     }
  
     function Cancelled() {
        const order_completed = document.querySelector<HTMLElement>("#order_completed")!;
        const order_Processing = document.querySelector<HTMLElement>("#order_Processing")!;
        const order_Cancelled = document.querySelector<HTMLElement>("#order_Cancelled")!;
  
        order_completed.style.backgroundColor = "#F1F1F1";
        order_Processing.style.backgroundColor = "#F1F1F1";
        order_Cancelled.style.backgroundColor = "#1B4B66";

        order_completed.style.color = "#626262";
        order_Processing.style.color = "#626262";
        order_Cancelled.style.color = "#FFFFFF";
     }

    return (
        <section>
            <Div_Titles>
                <Div_options_Title href="./home page.html">Home</Div_options_Title>
                <Icon_arrow src={arrow_nav} alt="Arrow icon" />
                <Link_profile>
                    <a href="./profile.html">User Profile</a>
                </Link_profile>
                <Icon_arrow src={arrow_nav} alt="Arrow icon" />
                <Div_options_TitleGray>My Orders</Div_options_TitleGray>
            </Div_Titles>
            <Div_subtitles>
                <a href="./profile.html">
                    <img src={Img_arrow_mob} alt="" />
                </a>
                <H1>My Orders</H1>
                <Search_orders type="search" placeholder='search' name="search_orders" id="search_orders" />
            </Div_subtitles>
            
            <Div_content>
                <Div_none>
                    <SideMenu />
                </Div_none>
               
                <Main>
                    <Div>
                        <div id='order_completed' onClick={completed}>
                            <h4>Completed</h4>
                        </div> 

                        <div id='order_Processing' onClick={Processing}>
                            <h4>Processing</h4>
                        </div> 

                        <div id='order_Cancelled' onClick={Cancelled}>
                            <h4>Cancelled</h4>
                        </div> 
                    </Div>

                    <Div_2>
                        <h4>Order ID</h4>
                        <h4>Date</h4>
                        <h4>Price</h4>
                        <h4>Status</h4>
                    </Div_2>

                    <Div_3>
                        <input type="checkbox" name="order1" id="order1" />
                        <h5>#874522648</h5>
                        <h5>December 16, 2022</h5>
                        <h5>$218.50</h5>
                        <h6>Paid</h6>
                        <a href="./profile - Orders - items.html">
                            <img src={arrow_nav} alt="" />
                        </a>
                        
                    </Div_3>

                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default MainProfileOrders