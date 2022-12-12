import { useState } from 'react'
import {  Main, H1, Input, Input_DDNumber, P_signup, Button} from './phone'
import React from 'react';
import MaskedInput from 'react-text-mask';

function SignupPhone() {
  const [DD, setDD] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

   return (
    <Main>
      <H1>Enter your phone number</H1>
      <div>
      <MaskedInput
          mask={['+', /[1-9]/, /\d/]}
          placeholder='+55'
          style={{backgroundColor: '#F1F1F1', border: 'none', borderRadius: '4px', width: '4.2rem', height: '2.625rem',paddingLeft: '1rem', marginRight: '1.4rem'}}
          value={DD}
          onChange = {(event: { target: { value: React.SetStateAction<string>; }; }) => setDD(event.target.value)} 
        />

        <MaskedInput
          mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholder='(xx) x xxxx-xxxx'
          style={{backgroundColor: '#F1F1F1', border: 'none', borderRadius: '4px', width: '17.98rem', height: '2.625rem',paddingLeft: '1rem'}}
          value={phoneNumber}
          onChange = {(event: { target: { value: React.SetStateAction<string>; }; }) => setphoneNumber(event.target.value)} 
        />
      </div>
      <P_signup>A 4 digit code will be sent to this number.</P_signup>
      <Button>
        <a href="./Signup-OTP.html">Next</a>
      </Button>
    </ Main>
     
   )
}

export default SignupPhone