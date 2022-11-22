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
import Img_shortcut from '../../../assets/Images/Home Page/PWA-CTA-mobile.png'
import Img_spring from '../../../assets/Images/Home Page/spring.png'


import { SectionHand, Shoph1, DivBrands, FigureShop, ImgLifestyle, Shoph3, Shoph2 ,Img_shotcut,  DivSkin_Face, Skin_img, FigureShotcurt, ImgShotcurt,  Skin_p, Skin_Arrow1, Face_p, Div_flex, Img_flex, Div_faceapp   } from './shop'

function ShopBrands() {
   return (
      <SectionHand>
         <Shoph1>Shop by Brands</Shoph1>
         <DivBrands>

            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex src={Img_zara} alt="Buy Zara" />
               </a>
            </Div_flex>

            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex src={Img_DG} alt="BUY D&G" />
               </a>
            </Div_flex>
            
            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex src={Img_HM} alt="Buy H&M" />
               </a>
            </Div_flex>

            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex src={Img_channel} alt="Buy channel" />
               </a>
            </Div_flex>

            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex src={Img_prada} alt="Buy prada" />
               </a>
            </Div_flex>

            <Div_flex>
               <a href="./src/assets/Pages/page404.html">
                  <Img_flex src={Img_biba} alt="Buy BIBA" />
               </a>
            </Div_flex>

         </DivBrands>

         <FigureShotcurt>
            <a href="./src/assets/Pages/page404.html">
               <ImgShotcurt src={Img_shortcut} alt="Look makeup accessories" />
            </a>
         </FigureShotcurt>
         <Shoph2>Makeup & Skincare</Shoph2>
         <FigureShop>
            <a href="./src/assets/Pages/page404.html">
               <ImgLifestyle src={Img_Lifestyle} alt="Look makeup accessories" />
            </a>
         </FigureShop>
         <DivSkin_Face >
            <Div_faceapp>
               <Skin_img src={Img_skincare} alt="Skincare Essentials" />
               <Skin_p>
                  Skincare <br /> Essentials
               </Skin_p>
               <a href="./src/assets/Pages/page404.html">
                  <Skin_Arrow1 src={Img_arrow1} alt="Arrow icon" />
               </a>
               
            </Div_faceapp>

            <Div_faceapp>
               <Skin_img src={Img_Facepacks} alt="Skincare Essentials" />
               <Face_p>
                  Facepacks<br /> & Peels
               </Face_p>
               <a href="./src/assets/Pages/page404.html">
                  <Skin_Arrow1 src={Img_arrow2} alt="Arrow icon" />
               </a>
            </Div_faceapp>
            
         </DivSkin_Face >
         <Shoph3>Trending Deals</Shoph3>
         <a href="./src/assets/Pages/page404.html">
            <Img_shotcut src={Img_spring} alt="" />
         </a>
      </SectionHand>
   )
}

export default ShopBrands