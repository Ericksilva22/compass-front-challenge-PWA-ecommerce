
import { useState } from 'react'
import {Main, Input_OTP, P_OTP, Form} from './OTP'

import {H1, Button} from '../Phone/phone'

function SignupOTP() {

  const [OTP1, setOTP1] = useState("");
  const [OTP2, setOTP2] = useState("");
  const [OTP3, setOTP3] = useState("");
  const [OTP4, setOTP4] = useState("");
  

  function nextOTP(){
    if(OTP1 === "1" && OTP2 === "2" && OTP3 === "3" && OTP4 === "4"){ // check inputs
      document.location.pathname = "./src/assets/Pages/profile.html"; //change to home page
    } else {
      alert("Failed! enter OTP: 1234")
    }
  }

   return (
    <Main>
      <H1>Enter OTP</H1>
      <P_OTP>A 4 digit code was sent to your number.</P_OTP>
      <Form>
        <Input_OTP maxLength={1} placeholder='x' type="text" name="" id="" value={OTP1} onChange = {(event: { target: { value: React.SetStateAction<string>; }; }) => setOTP1(event.target.value)} />
        <Input_OTP maxLength={1} placeholder='x' type="text" name="" id="" value={OTP2} onChange = {(event: { target: { value: React.SetStateAction<string>; }; }) => setOTP2(event.target.value)} />
        <Input_OTP maxLength={1} placeholder='x' type="text" name="" id="" value={OTP3} onChange = {(event: { target: { value: React.SetStateAction<string>; }; }) => setOTP3(event.target.value)} />
        <Input_OTP maxLength={1} placeholder='x' type="text" name="" id="" value={OTP4}  onChange = {(event: { target: { value: React.SetStateAction<string>; }; }) => setOTP4(event.target.value)} />
      </Form>
      <P_OTP>Didn’t recieve the code?<span> Request again</span></P_OTP>
      <Button onClick={nextOTP}>
        Verify & Create Account
      </Button>
    </ Main>
     
   )
}

export default SignupOTP