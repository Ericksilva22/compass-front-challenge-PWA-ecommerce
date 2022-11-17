import Logo from '../../assets/Images/Home Page/logo.svg'
import Icon_like from '../../assets/Images/Home Page/wishlist.svg'
import Icon_profile from '../../assets/Images/Home Page/profile.svg'
import Icon_bag from '../../assets/Images/Home Page/Fill=False.svg'
import Icon_search from '../../assets/Images/Home Page/search.svg'

import { Li, UlNav, Headerhome, HeaderNav, Headerform, Headericons, Headerinput, SearchIcon } from './header'

function Header() {
    return (
      <Headerhome>
         <h1 className="header__h1">
            <img className="img_logo" src={Logo} alt="Coral" />
         </h1>
         <HeaderNav>
            <UlNav className="nav__ul">
               <Li>
                  Handbags
               </Li>
               <Li>
                  Watches
               </Li>
               <Li >
                  Skincare
               </Li>
               <Li >
                  Jewellery
               </Li>
               <Li >
                  Apparels
               </Li>
            </UlNav>
         </HeaderNav>
         <Headerform>
            <Headerinput placeholder='search for products or brands.....' type="search" />
            <SearchIcon className="search-icon"  src={Icon_search} alt="Search icon" />
         </Headerform>
         <Headericons>
            <img src={Icon_like} alt="Wishlist icon" />
            <img src={Icon_profile} alt="Profile icon" />
            <img src={Icon_bag} alt="Bag icon" />
         </Headericons>
      </Headerhome>

    )
  }
  
  export default Header