import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import arrow_nav_up from '../../../assets/Images/Checkout Page/Vector-up.svg'
import arrow_nav_down from '../../../assets/Images/Checkout Page/Vector-down.svg'
import arrow_nav_left from '../../../assets/Images/Checkout Page/Vector-left.svg'
import Img_coach from '../../../assets/Images/Checkout Page/image-coach.svg'
import Img_blossomModal from '../../../assets/Images/Product Page/pink-bag-small_previwe.png'

import { Div_options, Div_options_TitleGray, Div_options_Title, H1_main, Main, Div_order, P_order, Button_order,
         Button_continue, Section_cart, Div_cart, Div_name, Div_product, Div_product_descriptions, Link_primary,
         Link_Sencondary, Div_Flex_Cart, Div_apply_cart, Div_Flex_Coupon, Div_wishlist, Div_pri, Img_modal_pre} from './main'

import {H1_order, Div_details, P_details, Figure, H3_order} from '../../checkout page/Order/Order'

import {Div_flex, H2_main, Img_none, Img_arrow_mobile} from '../../checkout page/main/main'

import {Div_apply, P_Div_apply, A_Div_apply} from '../../modal box/modal'


function MainCart() {

   function MoreCart(){

      const icon_down = document.querySelector<HTMLElement>("#Icon_down_cart")!;
      const icon_up = document.querySelector<HTMLElement>("#Icon_up_cart")!;

      const Div_Apply = document.querySelector<HTMLElement>("#Div_apply")!;

      icon_down.style.display = "block";
      icon_up.style.display = "none";
      Div_Apply.style.display = "flex";

      
   }

   function CloseCart(){
      const icon_down = document.querySelector<HTMLElement>("#Icon_down_cart")!;
      const icon_up = document.querySelector<HTMLElement>("#Icon_up_cart")!;

      const Div_Apply = document.querySelector<HTMLElement>("#Div_apply")!;

      icon_down.style.display = "none";
      icon_up.style.display = "block";
      Div_Apply.style.display = "none";
      
   }

    return (
      <Main>
         <Div_options>
            <Div_options_Title href="../../home page.html">Home</Div_options_Title>
            <img src={arrow_nav} alt="Arrow icon" />
            <Div_options_TitleGray>My cart</Div_options_TitleGray>
         </Div_options>
         <a href="./home page.html">
            <Img_arrow_mobile src={arrow_nav_left} alt="Arrow icon" />
         </a>
         <H1_main>My cart</H1_main>
         <Section_cart>
            <Div_cart>
               <Div_name>
                  <p>Product Name</p>
                  <div>
                     <p>Price</p>
                     <p>Qty</p>
                     <p>Subtotal</p>
                  </div>
               </Div_name>

               <Div_product>
                  <Div_Flex_Cart >
                     <Figure>
                        <Img_modal_pre src={Img_blossomModal} alt="" />
                     </Figure>

                     <div>
                        <H3_order>Grande</H3_order>
                        <P_order >Blossom Pouch</P_order >
                        <P_order >Qty- 2</P_order >
                     </div>
                  </Div_Flex_Cart >

                  <Div_product_descriptions>
                     <Div_pri>
                        <p>$39.49</p>
                        <p>2</p>
                        <p>78.98</p>
                     </Div_pri>
                     <h5>$78.98</h5>

                     <Div_wishlist>
                        <Link_primary href="">Move to Wishlist</Link_primary>
                        <Link_Sencondary href="">Remove</Link_Sencondary>
                     </Div_wishlist>
                  </Div_product_descriptions>
               </Div_product>

               <Div_product>
                  <Div_Flex_Cart >
                     <Figure>
                        <img src={Img_coach} alt="" />
                     </Figure>

                     <div>
                        <H3_order>Coach</H3_order>
                        <P_order >Leather Coach Bag</P_order >
                        <P_order >Qty- 2</P_order >
                     </div>
                  </Div_Flex_Cart >

                  <Div_product_descriptions>
                     <Div_pri>
                        <p>$54.69</p>
                        <p>2</p>
                        <p>109.38</p>
                     </Div_pri>
                     <h5>$109.38</h5>

                     <Div_wishlist>
                        <Link_primary href="">Move to Wishlist</Link_primary>
                        <Link_Sencondary href="">Remove</Link_Sencondary>
                     </Div_wishlist>
                  </Div_product_descriptions>
               </Div_product>

               <Div_Flex_Coupon>
                  <H2_main>Apply Coupon Code</H2_main>
                  <img src={arrow_nav_down} id="Icon_down_cart" onClick={CloseCart} alt="" />
                  <Img_none src={arrow_nav_up} id="Icon_up_cart" onClick={MoreCart} alt="" />
               </Div_Flex_Coupon>

               
               <Div_apply_cart id='Div_apply'>
                  <P_Div_apply>Apply Coupon Code</P_Div_apply>
                  <A_Div_apply href="../page404.html">CHECK</A_Div_apply>
               </Div_apply_cart>
            </Div_cart>
            <Div_order>
               <H1_order>Order Summary</H1_order>
               <Div_details>
                  <P_details>Sub Total</P_details>
                  <p>$190.37</p>
               </Div_details>

               <Div_details>
                  <P_details>Discount</P_details>
                  <p>-$13.40</p>
               </Div_details>

               <Div_details>
                  <P_details>Delivery Fee</P_details>
                  <p>-$0.00</p>
               </Div_details>

               <Div_details>
                  <P_order>Grand Total</P_order>
                  <P_order>$176.97</P_order>
               </Div_details>

               <Div_details>
                  <Button_order>
                     <a href="./checkout.html">
                        Place Order
                     </a>
                  </Button_order>
                  <Button_continue>Continue Shopping</Button_continue>
               </Div_details>
               
            </Div_order>
         </Section_cart>
      </Main>
    )
  }
  
  export default MainCart