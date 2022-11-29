import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import arrow_nav_up from '../../../assets/Images/Checkout Page/Vector-up.svg'
import arrow_nav_down from '../../../assets/Images/Checkout Page/Vector-down.svg'

import { Div_options, Div_options_Title, Div_options_TitleGray, H1_main, H2_main, Main, Div_flex,
         Section, Form, H3_main,  Div_flex_form, Div_input, Input, Input_DDNumber, Input_second,
         Div_flex_next, Link, Button } from './main'

import MainOrder from '../Order'

function MainCheckout() {

    return (
      <Main>
         <Section>
            <Div_options>
               <Div_options_Title href="../../../../../index.html">Home</Div_options_Title>
               <img src={arrow_nav} alt="Arrow icon" />
               <Div_options_TitleGray>Checkout</Div_options_TitleGray>
            </Div_options>
            <H1_main>Checkout</H1_main>
            <Div_flex>
               <H2_main>Add New Address</H2_main>
               <img src={arrow_nav_up} alt="" />
            </Div_flex>

            <Form action="">
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
                     <H3_main>City</H3_main>
                     <Input_second type="text" placeholder='Enter Pin Code' />
                  </Div_input>
               </ Div_flex_form>
            </Form>

            <Div_flex>
               <H2_main>Select Payment Method</H2_main>
               <img src={arrow_nav_down} alt="" />
            </Div_flex>

            <Div_flex_next>
               <Link href="">Back to cart</Link>
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