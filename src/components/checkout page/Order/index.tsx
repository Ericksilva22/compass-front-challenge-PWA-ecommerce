import Img_coach from '../../../assets/Images/checkout page/image-coach.svg'


import { Aside, H1_order, Div_flex, Figure, H3_order, P_order, Div_details, P_details  } from './Order'

function MainOrder() {

    return (
      <Aside>
         <H1_order>Order Summary</H1_order>
         <Div_flex >
            <Figure>
               <img src={Img_coach} alt="" />
            </Figure>

            <div>
               <H3_order>Coach</H3_order>
               <P_order >Leather Coach Bag</P_order >
               <P_order >Qty- 1</P_order >
            </div>
         </Div_flex >

         <Div_flex >
            <Figure>
               <img src={Img_coach} alt="" />
            </Figure>

            <div>
               <H3_order>Coach</H3_order>
               <P_order >Leather Coach Bag</P_order >
               <P_order >Qty- 1</P_order >
            </div>
         </Div_flex >
         <H1_order>Order Details</H1_order>
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
            <P_details>Grand Total</P_details>
            <p>$106.29</p>
         </Div_details>
      </Aside>
      
    )
  }
  
  export default MainOrder