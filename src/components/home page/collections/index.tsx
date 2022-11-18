import Img_personalCare from '../../../assets/Images/Home Page/personal care.png'
import Img_handbags from '../../../assets/Images/Home Page/handbags.png'
import Img_watches from '../../../assets/Images/Home Page/watches.png'
import Img_glasses from '../../../assets/Images/Home Page/glasses.png'

import { SectionHand, Handpickedh1, DivCollections  } from './collections'

function Handpicked() {
   return (
      <SectionHand>
         <Handpickedh1>Handpicked Collections </Handpickedh1>
         <DivCollections >
            <a href="./src/assets/Pages/page404.html">
               <img src={Img_personalCare} alt="Personal care" />
            </a>

            <a href="./src/assets/Pages/page404.html">
               <img src={Img_handbags} alt="Handbags" /> 
            </a>
            
            <a href="./src/assets/Pages/page404.html">
               <img src={Img_watches} alt="Wrist Watches" />
            </a>
            
            <a href="./src/assets/Pages/page404.html">
               <img src={Img_glasses} alt="Sun Glasses" />
            </a>
            
         </DivCollections >
      </SectionHand>
   )
}

export default Handpicked