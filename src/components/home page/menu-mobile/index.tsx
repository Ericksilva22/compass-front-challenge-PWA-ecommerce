import Img_arrow from '../../../assets/Images/profile Page/arrow-li.svg'
import Img_profile from '../../../assets/Images/profile Page/no-profile-picture.jpg'
import Img_close from '../../../assets/Images/Home Page/modal_close.png'

import {Fade, Modal_container, Section_profile, Image_profile, Image_close, H2, Ul} from './menu-mobile'


function Menu_mobile() {

   function closeMenu() {
      const modal = document.querySelector<HTMLElement>('#modal_container_menu_mobile')!;
      const fade = document.querySelector<HTMLElement>('#fade_menu_mobile')!;

      modal.style.display = "none";
      fade.style.display = "none";
   }

    return (
         <section>
            <Fade id='fade_menu_mobile'></Fade>
            <Modal_container id='modal_container_menu_mobile'>
               <Image_close src={Img_close} onClick={closeMenu} alt="" />
               <Section_profile>
                  <Image_profile src={Img_profile} alt="" />
                  <h1>Hello, Erickson</h1>
                  <a href="./profile.html">
                     <img src={Img_arrow} alt="" />
                  </a>
               </Section_profile>
               <nav>
                  <H2>Top categories</H2>
                  <Ul>
                     <li>
                        <a href="./Category pages/skincare/skincarePage1.html">Skincare</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./Category pages/apparels/apparelsPage1.html">Apparels</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./Category pages/jewellery/jewelleryPage1.html">Jewellery</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./Category pages/handbags/handbagsPage1.html">Handbags</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./page404.html">Eyeware</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./page404.html">Fragrance</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./Category pages/watches/watchesPage1.html">Watches</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./about.html">About</a>
                        <img src={Img_arrow} alt="" />
                     </li>
               </Ul>

               <H2>Contact Us</H2>
                  <Ul>
                     <li>
                        <a href="./page404.html">Help & Support</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./page404.html">Feedback & Suggestions</a>
                        <img src={Img_arrow} alt="" />
                     </li>

                     <li>
                        <a href="./page404.html">Visit Websites</a>
                        <img src={Img_arrow} alt="" />
                     </li>
               </Ul>
              </nav>
            </Modal_container>
         </section>
     
    )
  }
  
  export default Menu_mobile