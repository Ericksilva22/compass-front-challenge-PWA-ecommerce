import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import Img_coach from '../../../assets/Images/Product Page/product-image-coach.png'
import Img_ratings from '../../../assets/Images/Product Page/Ratings.svg'


import { Div_options, Main_coach, Div_options_Title, Div_options_TitleGray, Div_content, Figure, Img_Main, Div_description_product, H1_description_product, P_description_product, Div_ratings, P_ratings, Div_prices, P_price, P_priceOriginal, P_priceOFF, Div_details, Div_check, H3_Div_check, P_Div_check, Div_apply, P_Div_apply, A_Div_apply } from './mainCoach'

function MainCoach() {
    return (
      <Main_coach>
         <Div_options>
            <Div_options_Title>Home</Div_options_Title>
            <img src={arrow_nav} alt="Arrow icon" />
            <Div_options_Title>Handbag</Div_options_Title>
            <img src={arrow_nav} alt="Arrow icon" />
            <Div_options_TitleGray>Label</Div_options_TitleGray>
         </Div_options>
         <Div_content>
            <Figure>
               <Img_Main src={Img_coach} alt="Leathe Coach Bag with adjustable starps" />
            </Figure>
            <Div_description_product>
               <H1_description_product>Coach</H1_description_product>
               <P_description_product>Leather Coach Bag with adjustable starps.</P_description_product>
               <Div_ratings>
                  <img src={Img_ratings} alt="Ratings" />
                  <P_ratings>(250) Ratings</P_ratings>
               </Div_ratings>
               <Div_prices>
                  <P_price>$54.69</P_price>
                  <P_priceOriginal>$78.66</P_priceOriginal>
                  <P_priceOFF>50%OFF</P_priceOFF>
               </Div_prices>
               <Div_details>
                  <Div_check>
                     <H3_Div_check>Delivery Details</H3_Div_check>
                     <P_Div_check>Check estimated delivery date/pickup option.</P_Div_check>
                  </Div_check>
                  <Div_apply>
                     <P_Div_apply>Apply Valid Pincode</P_Div_apply>
                     <A_Div_apply href="../page404.html">CHECK</A_Div_apply>
                  </Div_apply>
               </Div_details>
              
            </Div_description_product>
         </Div_content>
      </Main_coach>
    )
  }
  
  export default MainCoach