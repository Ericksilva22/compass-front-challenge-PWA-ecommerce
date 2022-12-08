import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import Img_no_profile from '../../../assets/Images/Profile Page/no-profile-picture.jpg'

import SideMenu from './nav'
import {Icon_arrow, Div_options_Title, Div_options_TitleGray} from '../../Product page/main coach/mainCoach'
import {H1, Div_Titles, Main} from './main'
import Profile from './profile'

function MainProfile() {
    return (
        <section>
            <Div_Titles>
                <Div_options_Title href="./home page.html">Home</Div_options_Title>
                <Icon_arrow src={arrow_nav} alt="Arrow icon" />
                <Div_options_TitleGray>User Profile</Div_options_TitleGray>
            </Div_Titles>
            <H1>Profile</H1>
            <Profile/>
            <div>
                <SideMenu />
                <Main>
                    <img src={Img_no_profile} alt="" />
                </Main>
            </div>
        </section>
        
      
    )
 }
 
 export default MainProfile