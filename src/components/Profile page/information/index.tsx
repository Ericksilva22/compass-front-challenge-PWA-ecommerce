import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import Img_no_profile from '../../../assets/Images/Profile Page/no-profile-picture.jpg'
import Img_button_logout from '../../../assets/Images/Profile Page/logout.svg'
import Img_eye from '../../../assets/Images/Profile Page/Trailing Icons.svg'


import SideMenu from '../main/nav'
import {Icon_arrow, Div_options_Title, Div_options_TitleGray} from '../../Product page/main coach/mainCoach'
import {H1, Div_Titles, } from '../main/main'
import {Div_subtitles, ButtonLogout_subtitles, Div_content, Main, H2, Label, Div_names, Input_names, Input_email, 
        Input_DDD, Input_number, Input_password, Eye_icon } from './information'

function MainProfileInformation() {
    return (
        <section>
            <Div_Titles>
                <Div_options_Title href="./home page.html">Home</Div_options_Title>
                <Icon_arrow src={arrow_nav} alt="Arrow icon" />
                <Div_options_TitleGray>User Profile</Div_options_TitleGray>
            </Div_Titles>
            <Div_subtitles>
                <H1>Personal Information</H1>
                <ButtonLogout_subtitles>
                    <img src={Img_button_logout} alt="Logout icon" />
                    <a href=''>Logout</a>
                </ButtonLogout_subtitles>
            </Div_subtitles>
            
            <Div_content>
                <SideMenu />
                <Main>
                    <H2>Personal Information</H2>
                    <form action="">
                        <Div_names>
                            <div>
                                <Label htmlFor="first_name">First Name</Label>
                                <Input_names type="text" placeholder='John' />
                            </div>
                            
                            <div>
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input_names type="text" placeholder='Doe' />
                            </div>
                            
                        </Div_names>

                        <div>
                            <Label htmlFor="email">Last Name</Label>
                            <Input_email type="text" placeholder='Johndoe@johndoe.com' />
                        </div>
                        
                        <Label htmlFor="number">Mobile Number</Label>
                        <div>
                            <Input_DDD type="text" placeholder='+55' />
                            <Input_number type="text" placeholder='(86) 9 9999-9999'/>
                        </div>

                        <div>
                            <Label htmlFor="number">Date of birth</Label>
                            <Input_number type="date"/>
                        </div>

                        <H2>Change Password</H2>
                        <div>
                            <Label htmlFor="current">Current Password</Label>
                            <Input_password type="password" name="current" id="current" placeholder='*********' />

                            <Label htmlFor="current">New Password</Label>
                            <Input_password type="password" name="current" id="current" placeholder='*******' />
                            <Eye_icon src={Img_eye} alt="" />

                            <Label htmlFor="confirm">Confirm Password</Label>
                            <Input_password type="password" name="confirm" id="confirm" placeholder='*******' />
                        </div>
                    </form>
                </Main>
            </Div_content>
        </section>
        
      
    )
 }
 
 export default MainProfileInformation