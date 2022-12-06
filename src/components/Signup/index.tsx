import Img_signup from '../../assets/Images/Home Page/bg-1.png'

import {  Main, Figure, Div_account, Img_mobile } from './signup'

function ContentSignup() {
   return (
    <Main>
      <Figure>
        <Img_mobile src={Img_signup} alt="background image" />
      </Figure>
      <Div_account>
        <h1>The shopping destination you need</h1>
        <button>
          <a href="">Get Started</a>
        </button>
        <h3>I already have an account</h3>
      </Div_account>
    </ Main>
     
   )
}

export default ContentSignup