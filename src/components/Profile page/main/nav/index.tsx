import Img_li_arrow from '../../../../assets/Images/Profile Page/arrow-li.svg'
import Img_button_logout from '../../../../assets/Images/Profile Page/logout.svg'

import { Aside, Link_li, ButtonLogout_mobile } from './sidemenu'

function SideMenu() {
   return (
    <Aside>
      <nav>
        <ul>
          <li>
            <div></div>
            <Link_li href="">Personal Information</Link_li>
            <a href=""> <img src={Img_li_arrow} alt="arrow icon" /></a>
          </li>

          <li>
            <div></div>
            <Link_li href="">Refer and Earn</Link_li>
            <a href=""> <img src={Img_li_arrow} alt="arrow icon" /></a>
          </li>

          <li>
            <div></div>
            <Link_li href="">My orders</Link_li>
            <a href=""> <img src={Img_li_arrow} alt="arrow icon" /></a>
          </li>

          <li>
            <div></div>
            <Link_li href="">My Wishlist</Link_li>
            <a href=""> <img src={Img_li_arrow} alt="arrow icon" /></a>
          </li>

          <li>
            <div></div>
            <Link_li href="">My Reviews</Link_li>
            <a href=""> <img src={Img_li_arrow} alt="arrow icon" /></a>
          </li>

          <li>
            <div></div>
            <Link_li href="">My Adress Book</Link_li>
            <a href=""> <img src={Img_li_arrow} alt="arrow icon" /></a>
          </li>

          <li>
            <div></div>
            <Link_li href="">My Saved Cards</Link_li>
            <a href=""> <img src={Img_li_arrow} alt="arrow icon" /></a>
          </li>
        </ul>
      </nav>
      <ButtonLogout_mobile>
        <img src={Img_button_logout} alt="Logout icon" />
        <p>Logout</p>
      </ButtonLogout_mobile>
    </Aside>
     
   )
}

export default SideMenu