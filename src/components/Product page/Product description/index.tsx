import down from '../../../assets/Images/Home Page/footer-up.svg'
import left from '../../../assets/Images/Home Page/Vector-left.svg'
import Img_invite from '../../../assets/Images/Home Page/refer-and-earn.png'
import Img_alsoLike from '../../../assets/Images/Home Page/you-might.png'



import { Section_description, Nav_description, Img_invite_mobile, Img_also_mobile,  Ul_description, Li_description, P_review, Li_related, Div_P, P_Description, Div_mobile, Div_product, H4_product, P_product, Icon_down } from './description'

function ProductDescription() {


   function MoreProduct(){
      const icon_down = document.querySelector<HTMLElement>("#arrow_down_product")!;
      const icon_left = document.querySelector<HTMLElement>("#arrow_left")!;
      const p_product = document.querySelector<HTMLElement>("#p_product")!;

      icon_down.style.display = "block";
      icon_left.style.display = "none";
      p_product.style.display = "block";
      
   }

   function MoreReview(){
      const icon_down = document.querySelector<HTMLElement>("#arrow_down_review")!;
      const icon_left = document.querySelector<HTMLElement>("#arrow_left_review")!;
      const p_review = document.querySelector<HTMLElement>("#p_review")!;

      icon_down.style.display = "block";
      icon_left.style.display = "none";
      p_review.style.display = "block";
      
   }


   return (
      <Section_description >
         <Nav_description>
            <Ul_description>
               <Li_description>
                  Product Description
               </Li_description>

               <Li_related>
                  Related Products
               </Li_related>

               <Li_related>
                  Ratings and Reviews
               </Li_related>
            </Ul_description>

         </Nav_description>
         <Div_P>
            <P_Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis illo, ratione molestiae nostrum cum placeat unde eum harum, molestias ex. Tempore repellat sunt veritatis dolor. Maiores repellendus enim rerum?</P_Description>
            <P_Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique aperiam amet consequuntur est facere quae, rem corrupti nesciunt quos nam, iste velit perferendis repudiandae eaque! Accusamus voluptatibus soluta odio.</P_Description>
            <P_Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos soluta atque explicabo, incidunt nostrum at repellat natus ea facilis beatae rem, illum dolorem doloremque. Repellendus iste nulla fugiat facere illo!</P_Description>
         </Div_P>

         <Div_mobile>
            <Div_product>
               <H4_product>Product Description</H4_product>
               <img id='arrow_left' onClick={MoreProduct} src={left} alt="" />
               <Icon_down id='arrow_down_product' src={down} alt="" />
            </Div_product>
            <P_product id='p_product'>Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long.</P_product>
         </Div_mobile>

         <Div_mobile>
            <Div_product>
               <H4_product>Ratings & Reviews</H4_product>
               <img id='arrow_left_review' onClick={MoreReview}  src={left} alt="" />
               <Icon_down id='arrow_down_review' src={down} alt="" />
            </Div_product>
            <P_review id='p_review'>Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long.</P_review>
         </Div_mobile>

         <Div_mobile>
            <Img_invite_mobile src={Img_invite} alt="" />
            <Img_also_mobile src={Img_alsoLike} alt="" />
         </Div_mobile>
      </Section_description >
   )
}

export default ProductDescription