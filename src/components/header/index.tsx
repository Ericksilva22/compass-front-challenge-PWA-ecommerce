import Logo from '../../assets/Images/Home Page/logo.svg'
import Icon_like from '../../assets/Images/Home Page/wishlist.svg'
import Icon_profile from '../../assets/Images/Home Page/profile.svg'
import Icon_bag from '../../assets/Images/Home Page/Fill=False.svg'
import Icon_search from '../../assets/Images/Home Page/search.svg'
import './header.css'

function Header() {
    return (
      <div className='header'>
         <h1 className='header__h1'>
            <img className='img_logo' src={Logo} alt="Coral" />
         </h1>
         <nav className='header__nav'>
            <ul className='nav__ul'>
               <li className='ul__itens'>
                  Handbags
               </li>
               <li className='ul__itens'>
                  Watches
               </li>
               <li className='ul__itens'>
                  Skincare
               </li>
               <li className='ul__itens'>
                  Jewellery
               </li>
               <li className='ul__itens'>
                  Apparels
               </li>
            </ul>
         </nav>
         <form className='header__form'>
            <input placeholder='search for products or brands.....' type="search" />
            <img className='search-icon' src={Icon_search} alt="Search icon" />
         </form>
         <div className='header__icons'>
            <img src={Icon_like} alt="Wishlist icon" />
            <img src={Icon_profile} alt="Profile icon" />
            <img src={Icon_bag} alt="Bag icon" />
         </div>
      </div>

    )
  }
  
  export default Header