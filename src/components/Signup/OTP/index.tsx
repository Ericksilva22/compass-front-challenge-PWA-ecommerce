

import {Main, Input_OTP, P_OTP, Form} from './OTP'

import {H1, Button} from '../Phone/phone'

function SignupOTP() {
   return (
    <Main>
      <H1>Enter OTP</H1>
      <P_OTP>A 4 digit code was sent to your number.</P_OTP>
      <Form>
        <Input_OTP placeholder='1' type="text" name="" id="" />
        <Input_OTP placeholder='2' type="text" name="" id="" />
        <Input_OTP placeholder='3' type="text" name="" id="" />
        <Input_OTP placeholder='4' type="text" name="" id="" />
      </Form>
      <P_OTP>Didn’t recieve the code?<span> Request again</span></P_OTP>
      <Button>
        <a href="">Verify & Create Account</a>
      </Button>
    </ Main>
     
   )
}

export default SignupOTP