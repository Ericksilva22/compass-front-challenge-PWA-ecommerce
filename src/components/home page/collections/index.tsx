import Img_personalCare from '../../../assets/Images/Home Page/personal care.png'
import Img_handbags from '../../../assets/Images/Home Page/handbags.png'
import Img_watches from '../../../assets/Images/Home Page/watches.png'
import Img_glasses from '../../../assets/Images/Home Page/glasses.png'

import { SectionHand, Handpickedh1, DivCollections, Img_flex, Div_flex} from './collections'

function Handpicked() {
   return (
      <SectionHand>
         <Handpickedh1>Handpicked Collections </Handpickedh1>
         <DivCollections >
            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex  src={Img_personalCare} alt="Personal care" />
               </a>
            </Div_flex>
               
            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex  src={Img_handbags} alt="Handbags" /> 
               </a>
            </Div_flex>
              
            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex  src={Img_watches} alt="Wrist Watches" />
               </a>
            </Div_flex>
               
            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex  src={Img_glasses} alt="Sun Glasses" />
               </a>
            </Div_flex>
               
            
         </DivCollections >
      </SectionHand>
   )
}

export default Handpicked