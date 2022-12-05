import img_cross from '../../../../assets/Images/Home Page/cross-small.svg'
import Img_minus from '../../../../assets/Images/Home Page/small-minus.svg'
import Img_plus from '../../../../assets/Images/Home Page/small-plus.svg'
import Img_coachModal from '../../../../assets/Images/Product Page/pink-bag-small_previwe.png'
import Img_back from '../../../../assets/Images/Home Page/leading-icon.svg'



import { Fade, Modal_container, Div_back, H2_back, Div_card_flex, Div_title, H3_title, P_title, Div_flex, Div_quantity,
   Div_prices, Div_description, H5_prices, Div_apply, P_Div_apply, A_Div_apply, Btn_Order, P_BtnOrder, P_continue, Img_pointer } from './modal'
import { useState } from 'react'


function Modal() {

   function closeModal(){
      const modal = document.querySelector<HTMLElement>('#modal_container')!;
      const fade = document.querySelector<HTMLElement>('#fade')!;
      modal.style.display = "none";
      fade.style.display = "none";
   }

   const [price, setPrice] = useState(39.49);
   const [number, setNumber] = useState(1);


   const changePrice = () => {
      setPrice(price + 39.49);
      setNumber(number + 1);
      
   }

   const minusPrice = () => {
      if (number > 1) {
         setPrice(price - 39.49);
         setNumber(number - 1);
      }
      
   }

   let total = price + 2;

    return (
         <section>
            <Fade id='fade'></Fade>
            <Modal_container id='modal_container'>
              <Div_back>
               <Img_pointer onClick={closeModal} src={Img_back } alt="" />
               <H2_back>Back</H2_back>
              </Div_back>

              <Div_card_flex>
                  <figure>
                     <img src={Img_coachModal} alt="Coach bag" />
                  </figure>
                  <Div_description>
                     <Div_title>
                        <H3_title>Grande</H3_title>
                        <img src={img_cross} alt="Cross Icon" />
                     </Div_title>
                     <P_title>Blossom Pouch</P_title>
                     <Div_flex>
                        <Div_quantity>
                           <Img_pointer src={Img_minus} onClick={minusPrice} alt="" />
                           <h4>{number}</h4>
                           <Img_pointer src={Img_plus} onClick={changePrice} alt="" />
                        </Div_quantity>
                        <h4>${price.toFixed(2)}</h4>
                     </Div_flex>
                  </Div_description> 
              </Div_card_flex>

              <Div_prices>
                  <Div_flex>
                     <H5_prices>Subtotal:</H5_prices>
                     <H5_prices>${price.toFixed(2)}</H5_prices>
                  </Div_flex>

                  <Div_flex>
                     <H5_prices>Tax:</H5_prices>
                     <H5_prices>$2.00</H5_prices>
                  </Div_flex>

                  <Div_flex>
                     <h5>Total:</h5>
                     <h5>${total.toFixed(2)}</h5>
                  </Div_flex>

                  <Div_apply>
                     <P_Div_apply>Apply Coupon Code</P_Div_apply>
                     <A_Div_apply href="../page404.html">CHECK</A_Div_apply>
                  </Div_apply>
                  

                  <Btn_Order>
                     <a href="../cart.html">
                        <P_BtnOrder>Place Order</P_BtnOrder>
                     </a>
                  </Btn_Order>
                  <P_continue>Continue Shopping</P_continue>
              </Div_prices>
            </Modal_container>
         </section>
     
    )
  }
  
  export default Modal