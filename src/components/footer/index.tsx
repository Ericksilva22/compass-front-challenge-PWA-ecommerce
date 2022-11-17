import Footer_logos from '../../assets/Images/Home Page/Footer_logos.svg'
import Footer_location from '../../assets/Images/Home Page/footer-location.svg'

import { Footer_content, ShopCategory, Footer_title, Footer_links, DivLogos, DivLocation, Img_Logos } from './footer'

function Footer() {
    return (
      <Footer_content>
         <ShopCategory>
            <Footer_title>Shop by category</Footer_title>
            <Footer_links href="">Skincare</Footer_links>
            <Footer_links href="">Personal Care</Footer_links>
            <Footer_links href="">Handbags</Footer_links>
            <Footer_links href="">Apparels</Footer_links>
            <Footer_links href="">Watches</Footer_links>
            <Footer_links href="">Eye Wear</Footer_links>
            <Footer_links href="">Jewellery</Footer_links>
         </ShopCategory>

         <ShopCategory>
            <Footer_title>About</Footer_title>
            <Footer_links href="">Contact Us</Footer_links>
            <Footer_links href="">About Us</Footer_links>
            <Footer_links href="">Careers</Footer_links>
            <Footer_links href="">Press</Footer_links>
         </ShopCategory>

         <ShopCategory>
            <Footer_title>Policy</Footer_title>
            <Footer_links href="">Return Policy</Footer_links>
            <Footer_links href="">Terms of Use</Footer_links>
            <Footer_links href="">Sitemap</Footer_links>
            <Footer_links href="">Security</Footer_links>
            <Footer_links href="">EPR Compliance</Footer_links>
         </ShopCategory>

         <DivLogos>
            <Img_Logos src={Footer_logos} alt="" />
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