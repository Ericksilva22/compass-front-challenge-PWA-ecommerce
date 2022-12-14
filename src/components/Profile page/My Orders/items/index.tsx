import arrow_nav from '../../../../assets/Images/Profile Page/Vector-arrow.svg'
import Img_coach from '../../../../assets/Images/Profile Page/image.png'
import Img_arrow_mob from '../../../../assets/Images/Category page/leading-icon_mob.svg'
import Img_blossomModal from '../../../../assets/Images/Product Page/pink-bag-small_previwe.png'

import SideMenu from '../../main/nav'
import {Icon_arrow, Div_options_Title, Div_options_TitleGray, Div_details, Figure} from '../../../Product page/main coach/mainCoach'
import {H1} from '../../main/main'
import {Div_subtitles, Div_content, Main, Link_profile, Div_none, Div, Div_2, DiV_titles_items, Div_information, Btn_reoder, Btn_addBag, Img_bloss  } from './items'
import { H1_order, Img_modal_pre, H3_order, P_order, P_details } from '../../../checkout page/Order/Order'
import { Div_flex } from '../../Add New Adress/newAdress'


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
                    </Div_2>
                    <Div_information>
                        <Div_flex >
                            <Figure>
                                <Img_bloss src={Img_blossomModal} alt="" />
                            </Figure>
                            <div>
                            <H3_order>Grande</H3_order>
                            <P_order >Blossom Pouch</P_order >
                            <P_order >Qty- 2</P_order >
                            </div>
                        </Div_flex >

                        <Div_flex >
                            <Figure>
                            <img src={Img_coach} alt="" />
                            </Figure>
                            <div>
                            <H3_order>Coach</H3_order>
                            <P_order >Leather Coach Bag</P_order >
                            <P_order >Qty- 2</P_order >
                            </div>
                        </Div_flex >
                        <H1_order>Order Information</H1_order>
                        <h2>Order Details</h2>
                        <Div_details>
                            <P_details>Sub Total</P_details>
                            <h3>$190.37</h3>
                        </Div_details>

                        <Div_details>
                            <P_details>Discount</P_details>
                            <h3>-$13.40</h3>
                        </Div_details>

                        <Div_details>
                            <P_details>Delivery Fee</P_details>
                            <h3>-$0.00</h3>
                        </Div_details>

                        <Div_details>
                            <P_details>Grand Total</P_details>
                            <h3>$176.97</h3>
                        </Div_details>
                    </Div_information>
                    <Btn_reoder>
                        <a href="./checkout.html">Reoder</a>
                    </Btn_reoder>

                    <Btn_addBag>
                        <a href="./page404.html">Add Rating</a>
                    </Btn_addBag>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default OrdersItems