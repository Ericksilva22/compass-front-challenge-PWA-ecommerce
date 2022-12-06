import styled from 'styled-components'

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

export const H1 = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    color: #1B4B66;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width:375px){
        font-size: 2rem;
    }

    @media (max-width:320px){
        font-size: 1.5rem;
    }
`

export const Input = styled.input`
    background-color:#F1F1F1;
    border: none;
    border-radius: 4px;
    width:17.938rem;
    height: 2.625rem;
    padding-left: 1rem;

    &::-webkit-input-placeholder{ /* Chrome/opera/Safari */
        font-weight: 500;
        font-size: 0.875rem;
        color:#626262; 
    }

    &::-moz-placeholder{ /* Firefox 19+ */
        font-weight: 500;
        font-size: 0.875rem;
        color:#626262;
    }

    

    @media (max-width:425px){
       width: 70%;
    }

    @media (max-width:320px){
       width: 60%;
    }

`

export const Input_DDNumber = styled(Input)`
    width: 4.2rem;
    margin-right: 1.4rem;
    height: 42px;

    @media (min-width:426px) {
        width: 20%;
    }
`

export const P_signup = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: #626262;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-right: 14rem;

    @media (max-width:425px){
        padding-right: 12rem;
    }


    @media (max-width:375px){
        padding-right: 8rem;
    }

    @media (max-width:320px){
        padding-right: 6rem;
    }
`

export const Figure = styled.figure`
    
    @media (max-width: 425px) {
        height: 140vh;
    }

    @media (max-width: 375px) {
        height: 120vh;
    }

    @media (max-width: 320px) {
        height: 100vh;
    }
`
export const Button = styled.button`

    width: 100%;
    height: 44px;
    border: none;
    background-color: #1B4B66;
    border-radius: 8px;
    margin-top: 4rem;

    a {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
    }

    @media (min-width:426px) {
        width: 37%;
    }
`
