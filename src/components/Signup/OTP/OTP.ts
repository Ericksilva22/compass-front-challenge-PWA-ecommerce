import styled from 'styled-components'
import { Input_DDNumber } from '../Phone/phone'
import {P_signup} from '../Phone/phone'

export const Main = styled.main`
    
    @media (min-width: 426px) {
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    @media (max-width: 425px) {
        padding: 1rem;
    }

`

export const Input_OTP = styled(Input_DDNumber)`
    width: 3.25rem;
    margin-right: 1.4rem;
    height: 42px;

    @media (max-width:320px) {
        width: 16%;
    }
    

    @media (min-width:426px) {
        width: 7%;
        margin-right: 4rem;
    }
`

export const P_OTP = styled(P_signup)`
    padding-right: 0rem;
    font-size: 0.875rem;

    span {
        color:#1B4B66;
    }

    @media (min-width:426px) {
        font-size: 1.2rem;
    }
    
`

export const Form = styled.form`

    @media (min-width:426px) {
        margin-left: 29rem;
    }
`
