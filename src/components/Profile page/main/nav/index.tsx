import Img_li_arrow from '../../../../assets/Images/Profile Page/arrow-li.svg'

import { Aside, Link_li } from './sidemenu'

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
    </Aside>
     
   )
}

export default SideMenu