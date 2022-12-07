

import {  Main, H1, Input, Input_DDNumber, P_signup, Button} from './phone'

function SignupPhone() {
   return (
    <Main>
      <H1>Enter your phone number</H1>
      <div>
        <Input_DDNumber placeholder='+55' type="text" name="" id="" />
        <Input placeholder='(xx) x xxxx-xxxx' type="text" name="" id="" />
      </div>
      <P_signup>A 4 digit code will be sent to this number.</P_signup>
      <Button>
        <a href="./Signup-OTP.html">Next</a>
      </Button>
    </ Main>
     
   )
}

export default SignupPhone