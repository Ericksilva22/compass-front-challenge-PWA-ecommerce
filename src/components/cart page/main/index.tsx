import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import arrow_nav_up from '../../../assets/Images/Checkout Page/Vector-up.svg'
import arrow_nav_down from '../../../assets/Images/Checkout Page/Vector-down.svg'
import Img_UPI from '../../../assets/Images/Checkout Page/UPI-Logo-vector 1.svg'
import Img_credit from '../../../assets/Images/Checkout Page/Vector-card.svg'
import Img_amazon from '../../../assets/Images/Checkout Page/image 30.svg'
import Img_apple from '../../../assets/Images/Checkout Page/image 28.svg'
import Img_Google from '../../../assets/Images/Checkout Page/Group 660.svg'
import Img_Pe from '../../../assets/Images/Checkout Page/Group 9884.svg'
import Img_Paytm from '../../../assets/Images/Checkout Page/Group 9885.svg'

import { Div_options, Div_options_TitleGray, Div_options_Title, H1_main, Main, Div_order, P_order, Button_order,
         Button_continue} from './main'

import {H1_order, Div_details, P_details} from '../../checkout page/Order/Order'


function MainCart() {

    return (
      <Main>
         <Div_options>
            <Div_options_Title href="../../../../../index.html">Home</Div_options_Title>
            <img src={arrow_nav} alt="Arrow icon" />
            <Div_options_TitleGray>My cart</Div_options_TitleGray>
         </Div_options>
         <H1_main>My cart</H1_main>
         <section>
            <div>

            </div>

            <Div_order>
               <H1_order>Order Summary</H1_order>
               <Div_details>
                  <P_details>Sub Total</P_details>
                  <p>$119.69</p>
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
                  <P_order>$106.29</P_order>
               </Div_details>

               <Div_details>
                  <Button_order>Place Order</Button_order>
                  <Button_continue>Continue Shopping</Button_continue>
               </Div_details>
               
            </Div_order>
         </section>
      </Main>
    )
  }
  
  export default MainCart