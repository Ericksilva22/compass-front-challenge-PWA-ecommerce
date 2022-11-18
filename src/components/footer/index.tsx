import Footer_logos from '../../assets/Images/Home Page/Footer_logos.svg'
import Footer_location from '../../assets/Images/Home Page/footer-location.svg'

import { Footer_content, ShopCategory, Footer_title, Footer_links, DivLogos, DivLocation, Img_Logos } from './footer'

function Footer() {
    return (
      <Footer_content>
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

    )
  }
  
  export default Footer