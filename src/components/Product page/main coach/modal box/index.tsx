import img_cross from '../../../../assets/Images/Home Page/cross-small.svg'
import Img_minus from '../../../../assets/Images/Home Page/small-minus.svg'
import Img_plus from '../../../../assets/Images/Home Page/small-plus.svg'
import Img_coachModal from '../../../../assets/Images/Product Page/Rectangle 520.png'
import Img_back from '../../../../assets/Images/Home Page/leading-icon.svg'
import Img_blossomModal from '../../../../assets/Images/Product Page/pink-bag-small_previwe.png'



import { Fade, Modal_container, Div_back, H2_back, Div_card_flex, Div_title, H3_title, P_title, Div_flex, Div_quantity,
   Div_prices, Div_description, H5_prices, Div_apply, P_Div_apply, A_Div_apply, Btn_Order, P_BtnOrder, P_continue, Img_pointer, Img_modal_pre } from './modal'
import { useState } from 'react'

function Modal() {

   function closeModal(){
      const modal = document.querySelector<HTMLElement>('#modal_container')!;
      const fade = document.querySelector<HTMLElement>('#fade')!;
      modal.style.display = "none";
      fade.style.display = "none";
   }

   const [price, setPrice] = useState(78.99);
   const [number, setNumber] = useState(2);


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

   const [priceCoach, setPriceCoach] = useState(54.69);
   const [numberCoach, setNumberCoach] = useState(1);


   const changePriceCoach = () => {
      setPriceCoach(priceCoach + 54.69);
      setNumberCoach(numberCoach + 1);
      
   }

   const minusPriceCoach = () => {
      if (numberCoach > 1) {
         setPriceCoach(priceCoach - 54.69);
         setNumberCoach(numberCoach - 1);
      }
      
   }

   let subtotal = price + priceCoach;
   let total = subtotal +2;




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
                     <Img_modal_pre src={Img_blossomModal} alt="Blossom bag" />
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

              <Div_card_flex>
                  <figure>
                     <img src={Img_coachModal} alt="Coach bag" />
                  </figure>
                  <Div_description>
                     <Div_title>
                        <H3_title>Coach</H3_title>
                        <img src={img_cross} alt="Cross Icon" />
                     </Div_title>
                     <P_title>Leather Coach Bag</P_title>
                     <Div_flex>
                        <Div_quantity>
                           <Img_pointer src={Img_minus} onClick={minusPriceCoach} alt="" />
                           <h4>{numberCoach}</h4>
                           <Img_pointer src={Img_plus} onClick={changePriceCoach} alt="" />
                        </Div_quantity>
                        <h4>${priceCoach.toFixed(2)}</h4>
                     </Div_flex>
                  </Div_description> 
              </Div_card_flex>

              <Div_prices>
                  <Div_flex>
                     <H5_prices>Subtotal:</H5_prices>
                     <H5_prices>${subtotal.toFixed(2)}</H5_prices>
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