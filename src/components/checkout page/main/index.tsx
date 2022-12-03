import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import arrow_nav_up from '../../../assets/Images/Checkout Page/Vector-up.svg'
import arrow_nav_down from '../../../assets/Images/Checkout Page/Vector-down.svg'
import arrow_nav_left from '../../../assets/Images/Checkout Page/Vector-left.svg'
import Img_UPI from '../../../assets/Images/Checkout Page/UPI-Logo-vector 1.svg'
import Img_credit from '../../../assets/Images/Checkout Page/Vector-card.svg'
import Img_amazon from '../../../assets/Images/Checkout Page/image 30.svg'
import Img_apple from '../../../assets/Images/Checkout Page/image 28.svg'
import Img_Google from '../../../assets/Images/Checkout Page/Group 660.svg'
import Img_Pe from '../../../assets/Images/Checkout Page/Group 9884.svg'
import Img_Paytm from '../../../assets/Images/Checkout Page/Group 9885.svg'

import { Div_options, Div_options_Title, Div_options_TitleGray, H1_main, H2_main, Main, Div_flex,
         Section, Form, H3_main,  Div_flex_form, Div_input, Input, Input_DDNumber, Input_second,
         Div_flex_next, Link, Button, Img_none, Img_block, Label, Payment_options, Section_payments,
         Input_radio, Img_creditCard, Label_second, Input_Option_second, Input_text, P_options, Div_none, Img_arrow_mobile } from './main'

import MainOrder from '../Order'

function MainCheckout() {

   function MoreAdress(){
      const icon_down = document.querySelector<HTMLElement>("#Icon_down_adress")!;
      const icon_up = document.querySelector<HTMLElement>("#Icon_up_adress")!;

      const form_adress = document.querySelector<HTMLElement>("#Form_adress")!;

      icon_down.style.display = "block";
      icon_up.style.display = "none";
      form_adress.style.display = "none";
   }

   function CloseAdress(){
      const icon_down = document.querySelector<HTMLElement>("#Icon_down_adress")!;
      const icon_up = document.querySelector<HTMLElement>("#Icon_up_adress")!;

      const form_adress = document.querySelector<HTMLElement>("#Form_adress")!;

      icon_down.style.display = "none";
      icon_up.style.display = "block";
      form_adress.style.display = "flex";
      
   }


   function MorePayment(){
      const icon_down = document.querySelector<HTMLElement>("#Icon_down_payment")!;
      const icon_up = document.querySelector<HTMLElement>("#Icon_up_payment")!;

      const form_payments = document.querySelector<HTMLElement>("#section_payments")!;
      const form_payments_options = document.querySelector<HTMLElement>("#section_payment_options")!;

      icon_down.style.display = "none";
      icon_up.style.display = "block";
      form_payments.style.display = "none";
      form_payments_options.style.display = "none";

      
   }

   function ClosePayment(){
      const icon_down = document.querySelector<HTMLElement>("#Icon_down_payment")!;
      const icon_up = document.querySelector<HTMLElement>("#Icon_up_payment")!;

      const form_payments = document.querySelector<HTMLElement>("#section_payments")!;
      const form_payments_options = document.querySelector<HTMLElement>("#section_payment_options")!;

      icon_down.style.display = "block";
      icon_up.style.display = "none";
      form_payments.style.display = "flex";
      form_payments_options.style.display = "block";

      
   }

   function enterIDUPI(){
      const Div_UPI = document.querySelector<HTMLElement>("#Div_ID_UPI")!;
      const Div_phonePe = document.querySelector<HTMLElement>("#Div_ID_phonePe")!;
      const Div_paytm = document.querySelector<HTMLElement>("#Div_ID_paytm")!;
      
      Div_UPI.style.display = "block";
      Div_phonePe.style.display = "none";
      Div_paytm.style.display = "none";
   }


   function enterIDphonePe(){
      const Div_UPI = document.querySelector<HTMLElement>("#Div_ID_UPI")!;
      const Div_phonePe = document.querySelector<HTMLElement>("#Div_ID_phonePe")!;
      const Div_paytm = document.querySelector<HTMLElement>("#Div_ID_paytm")!;
      
      Div_UPI.style.display = "none";
      Div_phonePe.style.display = "block";
      Div_paytm.style.display = "none";
   }

   function enterIDpaytm(){
      const Div_UPI = document.querySelector<HTMLElement>("#Div_ID_UPI")!;
      const Div_phonePe = document.querySelector<HTMLElement>("#Div_ID_phonePe")!;
      const Div_paytm = document.querySelector<HTMLElement>("#Div_ID_paytm")!;
      
      Div_UPI.style.display = "none";
      Div_phonePe.style.display = "none";
      Div_paytm.style.display = "block";
   }

    return (
      <Main>
         <Section>
            <Div_options>
               <Div_options_Title href="../../../../../index.html">Home</Div_options_Title>
               <img src={arrow_nav} alt="Arrow icon" />
               <Div_options_TitleGray>Checkout</Div_options_TitleGray>
            </Div_options>
            <a href="./cart.html">
               <Img_arrow_mobile src={arrow_nav_left} alt="Arrow icon" />
            </a>
            <H1_main>Checkout</H1_main>
            <Div_flex>
               <H2_main>Add New Address</H2_main>
               <Img_block id='Icon_up_adress' src={arrow_nav_up} alt="" onClick={MoreAdress} />
               <Img_none id='Icon_down_adress' onClick={CloseAdress}  src={arrow_nav_down} alt="" />
            </Div_flex>

            <Form id='Form_adress' action="">
               < Div_flex_form>
                  <Div_input>
                     <H3_main>Full Name</H3_main>
                     <Input type="text" placeholder='Enter Name' />
                  </Div_input>

                  <Div_input>
                     <H3_main>Street Address</H3_main>
                     <Input type="text" placeholder='Enter Address ' />
                  </Div_input>

                  <Div_input>
                     <H3_main>City</H3_main>
                     <Input type="text" placeholder='Enter City' />
                  </Div_input>
               </ Div_flex_form>

               < Div_flex_form>
                  <Div_input>
                     <H3_main>Mobile Number</H3_main>
                     <Input_DDNumber type="text" placeholder='+11' />
                     <Input type="text" placeholder='Enter Number' />
                  </Div_input>

                  <Div_input>
                     <H3_main>State</H3_main>
                     <Input_second type="text" placeholder='Enter State' />
                  </Div_input>

                  <Div_input>
                     <H3_main>Pin code</H3_main>
                     <Input_second type="text" placeholder='Enter Pin Code' />
                  </Div_input>
               </ Div_flex_form>
            </Form>

            <Div_flex>
               <H2_main>Select Payment Method</H2_main>
               <img src={arrow_nav_down} id="Icon_down_payment" onClick={MorePayment} alt="" />
               <Img_none src={arrow_nav_up} id="Icon_up_payment" onClick={ClosePayment} alt="" />
            </Div_flex>

            <Section_payments id="section_payments">
               <Payment_options >
                  <Input_radio type="radio" id='UPI' name='payment'  value="UPI" checked />
                  <Label htmlFor="UPI">
                     <img src={Img_UPI} alt="UPI Logo" />
                     <h5>UPI</h5>
                  </Label>
               </Payment_options>

               <Payment_options >
                  <Input_radio type="radio" id='credit' name='payment' value="credit" />
                  <Label htmlFor="credit">
                     <Img_creditCard src={Img_credit} alt="credit card Logo" />
                     <h5>Credit/Debit Card</h5>
                  </Label>
               </Payment_options>

               <Payment_options >
                  <Input_radio type="radio" id='apple' name='payment'  value="apple" />
                  <Label htmlFor="apple">
                     <img src={Img_apple} alt="Apple pay Logo" />
                     <h5>Apple pay</h5>
                  </Label>
               </Payment_options>

               <Payment_options >
                  <Input_radio type="radio" id='amazon' name='payment' value="amazon" />
                  <Label htmlFor="amazon">
                     <img src={Img_amazon} alt="Amazon pay Logo" />
                     <h5>Amazon pay</h5>
                  </Label>
               </Payment_options>
            </Section_payments>
            <section id='section_payment_options'>
               
               <Label_second htmlFor="google">
                  <img src={Img_Google} alt="Amazon pay Logo" />
                  <h5>Google Pay</h5>
               </Label_second >
               <Div_none id='Div_ID_UPI'>
                  <Input_text type="text" placeholder='Enter your UPI Id' />
                  <P_options>Eg: 123456789@ybl</P_options>
                  <input type="checkbox" name="save" id="save" value= "s" /> <h4>Save this for future transactions</h4> 
               </Div_none>
               <Input_Option_second type="radio" id='google' name='payment-options' value="google" onClick={enterIDUPI}/> 

               <Label_second htmlFor="phone pe">
                  <img src={Img_Pe} alt="Phone pe Logo" />
                  <h5>Phone Pe</h5>
               </Label_second >
               <Div_none id='Div_ID_phonePe'>
                  <Input_text type="text" placeholder='Enter your UPI Id' />
                  <P_options>Eg: 123456789@ybl</P_options>
                  <input type="checkbox" name="save-pe" id="save-pe" value= "s" /> <h4>Save this for future transactions</h4> 
                  
               </Div_none>
               <Input_Option_second type="radio" id='phone pe' name='payment-options' value="phonePe" onClick={enterIDphonePe} /> 

               <Label_second htmlFor="paytm">
                  <img src={Img_Paytm} alt="Paytm Logo" />
                  <h5>Paytm</h5>
               </Label_second >
               <Div_none id='Div_ID_paytm'>
                  <Input_text type="text" placeholder='Enter your UPI Id' />
                  <P_options>Eg: 123456789@ybl</P_options>
                  <input type="checkbox" name="save-paytm" id="save-paytm" value= "s" />
                  <h4>Save this for future transactions</h4> 
               </Div_none>
               <Input_Option_second type="radio" id='paytm' name='payment-options' value="paytm" onClick={enterIDpaytm} />
            </section>
          

            <Div_flex_next>
               <Link href="./cart.html">Back to cart</Link>
               <Button>
                  <a href="">Next</a>
               </Button>
            </Div_flex_next>
         </Section>
         <MainOrder />
      </Main>
    )
  }
  
  export default MainCheckout