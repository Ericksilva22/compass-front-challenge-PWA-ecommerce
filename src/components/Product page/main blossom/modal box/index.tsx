import img_cross from '../../../../assets/Images/Home Page/cross-small.svg'
import Img_minus from '../../../../assets/Images/Home Page/small-minus.svg'
import Img_plus from '../../../../assets/Images/Home Page/small-plus.svg'
import Img_coachModal from '../../../../assets/Images/Product Page/pink-bag-small_previwe.png'
import Img_back from '../../../../assets/Images/Home Page/leading-icon.svg'



import { Fade, Modal_container, Div_back, H2_back, Div_card_flex, Div_title, H3_title, P_title, Div_flex, Div_quantity,
   Div_prices, Div_description, H5_prices, Div_apply, P_Div_apply, A_Div_apply, Btn_Order, P_BtnOrder, P_continue, Img_pointer } from './modal'


function Modal() {

   function closeModal(){
      const modal = document.querySelector<HTMLElement>('#modal_container')!;
      const fade = document.querySelector<HTMLElement>('#fade')!;
      modal.style.display = "none";
      fade.style.display = "none";
   }

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
                        <H3_title>Coach</H3_title>
                        <img src={img_cross} alt="Cross Icon" />
                     </Div_title>
                     <P_title>Leather Coach Bag</P_title>
                     <Div_flex>
                        <Div_quantity>
                           <img src={Img_minus} alt="" />
                           <h4>1</h4>
                           <img src={Img_plus} alt="" />
                        </Div_quantity>
                        <h4>$39.49</h4>
                     </Div_flex>
                  </Div_description> 
              </Div_card_flex>

              <Div_prices>
                  <Div_flex>
                     <H5_prices>Subtotal:</H5_prices>
                     <H5_prices>$39.49</H5_prices>
                  </Div_flex>

                  <Div_flex>
                     <H5_prices>Tax:</H5_prices>
                     <H5_prices>$2.00</H5_prices>
                  </Div_flex>

                  <Div_flex>
                     <h5>Total:</h5>
                     <h5>$41.39</h5>
                  </Div_flex>

                  <Div_apply>
                     <P_Div_apply>Apply Coupon Code</P_Div_apply>
                     <A_Div_apply href="../page404.html">CHECK</A_Div_apply>
                  </Div_apply>

                  <Btn_Order>
                     <P_BtnOrder>Place Order</P_BtnOrder>
                  </Btn_Order>
                  <P_continue>Continue Shopping</P_continue>
              </Div_prices>
            </Modal_container>
         </section>
     
    )
  }
  
  export default Modal