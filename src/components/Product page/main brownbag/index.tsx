import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import Img_brownbag from '../../../assets/Images/Product Page/brownbag_large.png'
import Img_ratings from '../../../assets/Images/Product Page/Ratings.svg'
import Icon_less from '../../../assets/Images/Product Page/Vector-mr.svg'
import Icon_plus from '../../../assets/Images/Product Page/VectorPlus.svg'
import Img_Off from '../../../assets/Images/Product Page/Frame 138.png'
import Icon_bag from '../../../assets/Images/Product Page/bag.svg'
import Icon_wishlist from '../../../assets/Images/Product Page/wishlist.svg'
import Img_arrowLeft from '../../../assets/Images/Product Page/chevron-left.svg'
import Img_arrowRight from '../../../assets/Images/Product Page/chevron-right.svg'
import Img_brownPreview from '../../../assets/Images/Product Page/brownbag_pre.png'


import { Div_options, Main_coach, Div_options_Title, Div_options_TitleGray, Div_content, Figure,
   Img_Main, Div_description_product, H1_description_product, P_description_product, Div_ratings,
   P_ratings, Div_prices, P_price, P_priceOriginal, P_priceOFF, Div_details, Div_check, H3_Div_check,
   P_Div_check, Div_apply, P_Div_apply, A_Div_apply, Div_quantity, P_quantity, H4_quantity, Div_PlusorLess,
   Div_buttons, Btn_Bag, P_BtnBag, Btn_Wish, Div_coachImages, Img_blossom_pre } from './mainBrownBag'

function MainBrownBag() {
    return (
      <Main_coach>
         <Div_options>
            <Div_options_Title href="../../../../index.html">Home</Div_options_Title>
            <img src={arrow_nav} alt="Arrow icon" />
            <Div_options_Title>Handbag</Div_options_Title>
            <img src={arrow_nav} alt="Arrow icon" />
            <Div_options_TitleGray>Label</Div_options_TitleGray>
         </Div_options>
         <Div_content>
            <Figure>
               <Img_Main src={Img_brownbag} alt="Leathe Coach Bag with adjustable starps" />
            </Figure>
            <Div_description_product>
               <H1_description_product>Remus</H1_description_product>
               <P_description_product>Brown Strap Bag.</P_description_product>
               <Div_ratings>
                  <img src={Img_ratings} alt="Ratings" />
                  <P_ratings>(250) Ratings</P_ratings>
               </Div_ratings>
               <Div_prices>
                  <P_price>$57.00</P_price>
                  <P_priceOriginal>$114.00</P_priceOriginal>
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
               <Div_quantity>
                  <H4_quantity>Quantity:</H4_quantity>
                  <Div_PlusorLess>
                     <img src={Icon_less} alt="Less icon" />
                     <P_quantity>1</P_quantity>
                     <img src={Icon_plus} alt="Plus icon" />
                  </Div_PlusorLess>
               </Div_quantity>
               <img src={Img_Off} alt="Get up to 30% off on order" />
               <Div_buttons>
                  <Btn_Bag>
                     <img src={Icon_bag} alt="Add to bag button" />
                     <P_BtnBag>Add to bag</P_BtnBag>
                  </Btn_Bag>

                  <Btn_Wish>
                     <img src={Icon_wishlist} alt="Add to wishilist button" />
                     <p>Add to Wishlist</p>
                  </Btn_Wish>
               </Div_buttons>
            </Div_description_product>
         </Div_content>
         <Div_coachImages>
            <img src={Img_arrowLeft} alt="Left arrow Icon" />
            <Img_blossom_pre src={Img_brownPreview} alt="front Brown bag image" />
            <Img_blossom_pre src={Img_brownPreview} alt="front Brown bag image" />
            <Img_blossom_pre src={Img_brownPreview} alt="front Brown bag image" />
            <Img_blossom_pre src={Img_brownPreview} alt="front Brown bag image" />
            <img src={Img_arrowRight} alt="right arrow icon" />
         </Div_coachImages>
      </Main_coach>
    )
  }
  
  export default MainBrownBag