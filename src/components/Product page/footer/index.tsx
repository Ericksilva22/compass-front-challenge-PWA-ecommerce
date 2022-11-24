import Footer_logos from '../../../assets/Images/Home Page/Footer_logos.svg'
import Footer_location from '../../../assets/Images/Home Page/footer-location.svg'
import Footer_up from '../../../assets/Images/Home Page/footer-down.svg'
import Footer_down from '../../../assets/Images/Home Page/footer-up.svg'

import { Footer_content, Footer_mobile,  DivMore, H2_more, Img_more_up, Img_more_down, ShopCategory, Footer_title, Footer_links, DivLogos, DivLocation, Img_Logos } from './footer'

function Footer() {

   function Moreabout(){
      const icon_down = document.querySelector<HTMLElement>("#more_about_down")!;
      const icon_up = document.querySelector<HTMLElement>("#more_about_up")!;
      const footer_content = document.querySelector<HTMLElement>("#footer_content")!;
      const div_more = document.querySelector<HTMLElement>("#div_more")!;

      icon_down.style.display = "none";
      icon_up.style.display = "block";
      footer_content.style.display = "flex";
      div_more.style.marginBottom = "7rem";
      
   }

   function Closeabout(){
      const icon_down = document.querySelector<HTMLElement>("#more_about_down")!;
      const icon_up = document.querySelector<HTMLElement>("#more_about_up")!;
      const footer_content = document.querySelector<HTMLElement>("#footer_content")!;
      const div_more = document.querySelector<HTMLElement>("#div_more")!;

      icon_down.style.display = "block";
      icon_up.style.display = "none";
      footer_content.style.display = "none";
      div_more.style.marginBottom = "2rem";
      
   }

    return (
      <Footer_mobile>
         <DivMore id='div_more'>
            <H2_more>
               More about CORA´L
            </H2_more>
            <Img_more_down id='more_about_down' onClick={Moreabout}  src={Footer_down} alt="" />
            <Img_more_up id='more_about_up' onClick={Closeabout} src={Footer_up} alt="" />
         </DivMore>
         <Footer_content id='footer_content'>
            <ShopCategory>
               <Footer_title>Shop by category</Footer_title>
               <Footer_links href="./src/assets/Pages/page404.html">Skincare</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Personal Care</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Handbags</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Apparels</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Watches</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Eye Wear</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Jewellery</Footer_links>
            </ShopCategory>

            <ShopCategory>
               <Footer_title>About</Footer_title>
               <Footer_links href="./src/assets/Pages/page404.html">Contact Us</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">About Us</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Careers</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Press</Footer_links>
            </ShopCategory>

            <ShopCategory>
               <Footer_title>Policy</Footer_title>
               <Footer_links href="./src/assets/Pages/page404.html">Return Policy</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Terms of Use</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Sitemap</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">Security</Footer_links>
               <Footer_links href="./src/assets/Pages/page404.html">EPR Compliance</Footer_links>
            </ShopCategory>

            <DivLogos>
               <a href="./src/assets/Pages/page404.html">
                  <Img_Logos src={Footer_logos} alt="" />
               </a>
               <DivLocation>
                  <img src={Footer_location} alt="Location Icon" />
                  <p>United States</p>
               </DivLocation>
               <Footer_links>© 2021 | Cora Leviene All Rights Reserved</Footer_links>
               
            </DivLogos>

         </Footer_content>
      </Footer_mobile>
    )
  }
  
  export default Footer