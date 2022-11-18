import Footer_logos from '../../assets/Images/Home Page/Footer_logos.svg'
import Footer_location from '../../assets/Images/Home Page/footer-location.svg'

import { Section_description, Nav_description, Ul_description, Li_description, Li_related, Div_P, P_Description  } from './description'

function ProductDescription() {
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
      </Section_description >
    )
  }
  
  export default ProductDescription