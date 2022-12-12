import Logo from '../../assets/Images/Home Page/logo.svg'
import Icon_like from '../../assets/Images/Home Page/wishlist.svg'
import Icon_profile from '../../assets/Images/Home Page/profile.svg'
import Icon_bag from '../../assets/Images/Home Page/bag_new.svg'
import Label from '../../assets/Images/Home Page/label.svg'
import Icon_search from '../../assets/Images/Home Page/search.svg'
import Icon_serch_mobile from  '../../assets/Images/Home Page/search mobile.svg'
import Icon_appbar_mobile from   '../../assets/Images/Home Page/app mobile.svg'
import Icon_add_mobile  from '../../assets/Images/Home Page/add-to-homescreen-mobile.svg'
import Icon_notification_mobile  from '../../assets/Images/Home Page/notification-mobile.svg'

import { Li, LinksLi, UlNav, Headerhome, HeaderNav, Headerform, Headericons, Headerinput, SearchIcon, ImgLabel, Img_icon,
   Div_desktop, Div_mobile} from './header'

function Header() {

   function displayModal(){
      const modal = document.querySelector<HTMLElement>('#modal_container')!;
      const fade = document.querySelector<HTMLElement>('#fade')!;
      modal.style.display = "block";
      fade.style.display = "block";
   }

   function menuMobileModal(){
      const modal = document.querySelector<HTMLElement>('#modal_container_menu_mobile')!;
      const fade = document.querySelector<HTMLElement>('#fade_menu_mobile')!;

      modal.style.display = "block";
      fade.style.display = "block";
      
   }


    return (
      <Headerhome>
         <Div_desktop>
            <h1 className="header__h1">
               <a href="./home page.html">
                  <img className="img_logo" src={Logo} alt="Coral" />
               </a>
            </h1>
            <HeaderNav>
               <UlNav className="nav__ul">
                  <Li>
                     <LinksLi href="./Category pages/handbags/handbagsPage1.html">
                        Handbags
                     </LinksLi>
                  </Li>

                  <Li>
                     <LinksLi href="./Category pages/watches/watchesPage1.html">
                        Watches
                     </LinksLi>
                  </Li>
                     
                  <Li >
                     <LinksLi href="./Category pages/skincare/skincarePage1.html">
                        Skincare
                     </LinksLi>
                     
                  </Li>
                  <Li >
                     <LinksLi href="./Category pages/jewellery/jewelleryPage1.html">
                        Jewellery
                     </LinksLi>
                     
                  </Li>
                  <Li >
                     <LinksLi href="./Category pages/apparels/apparelsPage1.html">
                        Apparels
                     </LinksLi>
                  </Li>
               </UlNav>
            </HeaderNav>
            <Headerform>
               <Headerinput placeholder='search for products or brands.....' type="search" />
               <SearchIcon className="search-icon"  src={Icon_search} alt="Search icon" />
            </Headerform>
            <Headericons>
               <img src={Icon_like} alt="Wishlist icon" />
               <a href="./profile.html">
                  <img src={Icon_profile} alt="Profile icon" />
               </a>
               <Img_icon onClick={displayModal} id='icon_bag' src={Icon_bag} alt="Bag icon" />
               <ImgLabel id='label_bag' src={Label} alt="Bag icon" />
            </Headericons>
         </Div_desktop>

         <Div_mobile>
            <nav>
               <ul>
                  <li>
                     <img src={Icon_appbar_mobile} onClick={menuMobileModal} alt="" />
                  </li>

                  <li>
                     <h1>Home</h1>
                  </li>

                  <li>
                     <img src={Icon_add_mobile} alt="" />
                  </li>

                  <li>
                     <img src={Icon_serch_mobile} alt="" />
                  </li>

                  <li>
                     <a href="./notification.html">
                        <img src={Icon_notification_mobile} alt="" />
                     </a>  
                  </li>
               </ul>
            </nav>
            
         </Div_mobile>
      </Headerhome>
      
    )
  }
  
  export default Header