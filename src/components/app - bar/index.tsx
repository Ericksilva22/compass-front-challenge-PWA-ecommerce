import img_app_home from '../../assets/Images/Home Page/icon_home.svg'
import Img_app_outline from '../../assets/Images/Home Page/outline_mobile.svg'
import Img_app_profile from '../../assets/Images/Home Page/icon_profile_mobile.svg'
import Img_app_categories from '../../assets/Images/Home Page/mobile-categories.svg'




import { Section_appBar  } from './appBar'


function AppBar() {


    return (
         <Section_appBar>
            <a href="">
               <img src={img_app_home} />
            </a>
            
            <a href="./src/assets/Pages/page404.html">
               <img src={Img_app_categories}  />
            </a>
            
            <a href="./src/assets/Pages/page404.html">
               <img src={Img_app_profile}  />
            </a>
            
            <a href="./src/assets/Pages/page404.html">
               <img src={Img_app_outline}  />
            </a>
            
         </Section_appBar>
      
    )
  }
  
  export default AppBar