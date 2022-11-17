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
            <img src={Img_personalCare} alt="Personal care" />
            <img src={Img_handbags} alt="Handbags" />
            <img src={Img_watches} alt="Wrist Watches" />
            <img src={Img_glasses} alt="Sun Glasses" />
         </DivCollections >
      </SectionHand>
   )
}

export default Handpicked