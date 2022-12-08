import Img_li_arrow from '../../../../assets/Images/Profile Page/arrow-li.svg'
import Img_no_profile from '../../../../assets/Images/Profile Page/no-profile-picture.jpg'

import { Div_profile, Image_profile, Name_profile, Email_profile, Phone_profile } from './profile'

function Profile() {
   return (
    <Div_profile>
      <Image_profile src={Img_no_profile} alt="profile image" />
      <div>
        <Name_profile>Complete seu perfil</Name_profile>
        <Email_profile>user@email.com</Email_profile>
        <Phone_profile>+55 86 9 9999-9999</Phone_profile>
      </div>
      <img src={Img_li_arrow} alt="" />
    </Div_profile> 
   )
}

export default Profile