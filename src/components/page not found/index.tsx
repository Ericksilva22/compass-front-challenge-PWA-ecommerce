import Img_logo from '../../assets/Images/Home Page/logo.svg'

import { Main, H1, H2, P, BtnPage404, BtnLink } from './404'

function ContentPage404() {
   return (
     <Main>
      <img src={Img_logo} alt="" />
      <H1>404</H1>
      <H2>PAGE NOT FOUND</H2>
      <P>The Page you were looking for does not exist.</P>
      <P>Are you sure the website URL is correct?</P>
      <BtnPage404>
        <BtnLink href="./home page.html">Go back home page</BtnLink>
      </BtnPage404>
     </Main>
   )
}

export default ContentPage404