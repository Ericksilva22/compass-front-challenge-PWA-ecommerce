import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import arrow_nav_left from '../../../assets/Images/Checkout Page/Vector-left.svg'

import { Div_options, Div_options_Title, Div_options_TitleGray, H1_main, H2_main, Main, Div_flex, Section, Form,
   H3_main,  Div_flex_form, Div_input, Input, Input_DDNumber, Input_second, Img_arrow_mobile, Button_adress,
   Input_delivery, Label_delivery, Div_delivery, Div_type_adress } from './newAdress'


function MainAdress() {

   function typeHome() {
      const adressHome = document.querySelector<HTMLElement>("#home")!;
      const adressOffice = document.querySelector<HTMLElement>("#office")!;
      const adressOther = document.querySelector<HTMLElement>("#other")!;

      adressHome.style.backgroundColor = "#1B4B66";
      adressOffice.style.backgroundColor = "#F1F1F1";
      adressOther.style.backgroundColor = "#F1F1F1";

      adressHome.style.color = "#FFFFFF";
      adressOffice.style.color = "#626262";
      adressOther.style.color = "#626262";
   }

   function typeOffice() {
      const adressHome = document.querySelector<HTMLElement>("#home")!;
      const adressOffice = document.querySelector<HTMLElement>("#office")!;
      const adressOther = document.querySelector<HTMLElement>("#other")!;

      adressHome.style.backgroundColor = "#F1F1F1";
      adressOffice.style.backgroundColor = "#1B4B66";
      adressOther.style.backgroundColor = "#F1F1F1";

      adressHome.style.color = "#626262";
      adressOffice.style.color = "#FFFFFF";
      adressOther.style.color = "#626262";
   }

   function typeOther() {
      const adressHome = document.querySelector<HTMLElement>("#home")!;
      const adressOffice = document.querySelector<HTMLElement>("#office")!;
      const adressOther = document.querySelector<HTMLElement>("#other")!;

      adressHome.style.backgroundColor = "#F1F1F1";
      adressOffice.style.backgroundColor = "#F1F1F1";
      adressOther.style.backgroundColor = "#1B4B66";

      adressHome.style.color = "#626262";
      adressOffice.style.color = "#626262";
      adressOther.style.color = "#FFFFFF";
   }

    return (
      <Main>
         <Section>
            <Div_options>
               <Div_options_Title href="./profile.html">Profile</Div_options_Title>
               <img src={arrow_nav} alt="Arrow icon" />
               <Div_options_TitleGray>New Address</Div_options_TitleGray>
            </Div_options>
            <a href="./cart.html">
               <Img_arrow_mobile src={arrow_nav_left} alt="Arrow icon" />
            </a>
            <H1_main>Add New Address</H1_main>
            <Div_flex>
               <H2_main>Contact Information</H2_main>
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

            <Div_type_adress>
               <div id='home' onClick={typeHome}>
                  <h4>Home</h4>
               </div>

               <div id='office' onClick={typeOffice}>
                  <h4>Office</h4>
               </div>

               <div id='other' onClick={typeOther}>
                  <h4>Other</h4>
               </div>
            </Div_type_adress>

            <Div_delivery>
               <Input_delivery type="checkbox" name="use_default" id="use_default" />
               <Label_delivery htmlFor="use_default">Use as default delivery address.</Label_delivery>
            </Div_delivery>
            <Button_adress>Save Adress</Button_adress>
         </Section>
      </Main>
    )
  }
  
  export default MainAdress