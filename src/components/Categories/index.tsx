import img_app_handbags from '../../assets/Images/Categories/Group 695.png'
import Img_app_outline from '../../assets/Images/Categories/Group 696.png'
import Img_app_profile from '../../assets/Images/Categories/Group 698.png'
import Img_app_categories from '../../assets/Images/Categories/Group 699.png'
import Img_app from '../../assets/Images/Categories/Group 701.png'

import {Section_categories, H1_categories, Div} from './categories'


function Categories() {


    return (

         <Div>
            <H1_categories>Categories</H1_categories>
            <Section_categories >
               <a href="./Category pages/handbags/handbagsPage1.html">
                  <img src={img_app_handbags} />
               </a>
               
               <a href="./page404.html">
                  <img src={Img_app_categories}  />
               </a>
               
               <a href="./page404.html">
                  <img src={Img_app_profile}  />
               </a>
               
               <a href="./Category pages/skincare/skincarePage1.html">
                  <img src={Img_app_outline}  />
               </a>

               <a href="./Category pages/apparels/apparelsPage1.html">
                  <img src={Img_app}  />
               </a>
            </Section_categories >
         </Div>
      
    )
  }
  
  export default Categories