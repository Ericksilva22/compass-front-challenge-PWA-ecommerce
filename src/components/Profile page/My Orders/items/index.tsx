import arrow_nav from '../../../../assets/Images/Profile Page/Vector-arrow.svg'
import Img_arrow_mob from '../../../../assets/Images/Category page/leading-icon_mob.svg'

import SideMenu from '../../main/nav'
import {Icon_arrow, Div_options_Title, Div_options_TitleGray} from '../../../Product page/main coach/mainCoach'
import {H1} from '../../main/main'
import {Div_subtitles, Div_content, Main, Link_profile, Div_none, Div, Div_2, DiV_titles_items  } from './items'


function OrdersItems() {

    function ordered() {
        const items_ordered = document.querySelector<HTMLElement>("#items_ordered")!;
        const items_invoice = document.querySelector<HTMLElement>("#items_invoice")!;
        const items_Shipment = document.querySelector<HTMLElement>("#items_Shipment")!;
  
        items_ordered.style.backgroundColor = "#1B4B66";
        items_invoice.style.backgroundColor = "#F1F1F1";
        items_Shipment.style.backgroundColor = "#F1F1F1";
  
        items_ordered.style.color = "#FFFFFF";
        items_invoice.style.color = "#626262";
        items_Shipment.style.color = "#626262";
     }
  
     function Invoices() {
        const items_ordered = document.querySelector<HTMLElement>("#items_ordered")!;
        const items_invoice = document.querySelector<HTMLElement>("#items_invoice")!;
        const items_Shipment = document.querySelector<HTMLElement>("#items_Shipment")!;
  
        items_ordered.style.backgroundColor = "#F1F1F1";
        items_invoice.style.backgroundColor = "#1B4B66";
        items_Shipment.style.backgroundColor = "#F1F1F1";
  
        items_ordered.style.color = "#626262";
        items_invoice.style.color = "#FFFFFF";
        items_Shipment.style.color = "#626262";
     }
  
     function Shipment() {
        const items_ordered = document.querySelector<HTMLElement>("#items_ordered")!;
        const items_invoice = document.querySelector<HTMLElement>("#items_invoice")!;
        const items_Shipment = document.querySelector<HTMLElement>("#items_Shipment")!;
  
        items_ordered.style.backgroundColor = "#F1F1F1";
        items_invoice.style.backgroundColor = "#F1F1F1";
        items_Shipment.style.backgroundColor = "#1B4B66";

        items_ordered.style.color = "#626262";
        items_invoice.style.color = "#626262";
        items_Shipment.style.color = "#FFFFFF";
     }

    return (
        <section>
            <DiV_titles_items >
                <Div_options_Title href="./home page.html">Home</Div_options_Title>
                <Icon_arrow src={arrow_nav} alt="Arrow icon" />
                <Link_profile>
                    <a href="./profile.html">User Profile</a>
                </Link_profile>
                <Icon_arrow src={arrow_nav} alt="Arrow icon" />
                <Div_options_TitleGray>My Orders</Div_options_TitleGray>
                <Icon_arrow src={arrow_nav} alt="Arrow icon" />
                <Div_options_TitleGray>Order#874522648</Div_options_TitleGray>
            </DiV_titles_items >
            <Div_subtitles>
                <a href="./profile.html">
                    <img src={Img_arrow_mob} alt="" />
                </a>
                <H1>Order#874522648</H1>
            </Div_subtitles>
            
            <Div_content>
                <Div_none>
                    <SideMenu />
                </Div_none>
               
                <Main>
                    <Div>
                        <div id='items_ordered' onClick={ordered}>
                            <h4>Itens Ordered</h4>
                        </div> 

                        <div id='items_invoice' onClick={Invoices}>
                            <h4>Invoices</h4>
                        </div> 

                        <div id='items_Shipment' onClick={Shipment}>
                            <h4>Order Shipment</h4>
                        </div> 
                    </Div>

                    <Div_2>
                        <h3>Product Name</h3>
                        <h4>Price</h4>
                        <h4>Qty</h4>
                        <h4>Subtotal</h4>
                    </Div_2>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default OrdersItems