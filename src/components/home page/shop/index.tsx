import Img_zara from '../../../assets/Images/Home Page/block_zara.svg'
import Img_DG from '../../../assets/Images/Home Page/block_DG.svg'
import Img_HM from '../../../assets/Images/Home Page/block_HM.svg'
import Img_channel from '../../../assets/Images/Home Page/block_channel.svg'
import Img_prada from '../../../assets/Images/Home Page/block_prada.svg'
import Img_biba from '../../../assets/Images/Home Page/block_biba.svg'
import Img_Lifestyle from '../../../assets/Images/Home Page/hero.png'
import Img_skincare from '../../../assets/Images/Home Page/Group 139.png'
import Img_Facepacks from '../../../assets/Images/Home Page/shop_img2.png'
import Img_arrow1 from '../../../assets/Images/Home Page/shop_arrow1.svg'
import Img_arrow2 from '../../../assets/Images/Home Page/shop_arrow2.svg'


import { SectionHand, Shoph1, DivBrands, FigureShop, ImgLifestyle, DivSkin_Face, Skin_img, Skin_p, Skin_Arrow1, Face_p   } from './shop'

function ShopBrands() {
   return (
      <SectionHand>
         <Shoph1>Shop by Brands</Shoph1>
         <DivBrands>
            <a href="./src/assets/Pages/page404.html">
               <img src={Img_zara} alt="Buy Zara" />
            </a>

            <a href="./src/assets/Pages/page404.html">
               <img src={Img_DG} alt="BUY D&G" />
            </a>

            <a href="./src/assets/Pages/page404.html">
               <img src={Img_HM} alt="Buy H&M" />
            </a>

            <a href="./src/assets/Pages/page404.html">
               <img src={Img_channel} alt="Buy channel" />
            </a>

            <a href="./src/assets/Pages/page404.html">
               <img src={Img_prada} alt="Buy prada" />
            </a>

            <a href="./src/assets/Pages/page404.html">
               <img src={Img_biba} alt="Buy BIBA" />
            </a>
         </DivBrands>
         <FigureShop>
            <a href="./src/assets/Pages/page404.html">
               <ImgLifestyle src={Img_Lifestyle} alt="Look makeup accessories" />
            </a>
            
         </FigureShop>
         <DivSkin_Face >
            <div>
               <Skin_img src={Img_skincare} alt="Skincare Essentials" />
               <Skin_p>
                  Skincare <br /> Essentials
               </Skin_p>
               <a href="./src/assets/Pages/page404.html">
                  <Skin_Arrow1 src={Img_arrow1} alt="Arrow icon" />
               </a>
               
            </div>

            <div>
               <Skin_img src={Img_Facepacks} alt="Skincare Essentials" />
               <Face_p>
                  Facepacks<br /> & Peels
               </Face_p>
               <a href="./src/assets/Pages/page404.html">
                  <Skin_Arrow1 src={Img_arrow2} alt="Arrow icon" />
               </a>
               
            </div>
         </DivSkin_Face >
      </SectionHand>
   )
}

export default ShopBrands