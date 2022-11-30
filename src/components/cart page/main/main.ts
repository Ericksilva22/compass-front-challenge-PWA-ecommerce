import styled from 'styled-components'

import { Button } from '../../checkout page/main/main'

export const Main = styled.main`
    margin: 2% 1% 8% 1%;
`

export const Div_options = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   width: 13%;
   margin-bottom: 2rem;
   @media (max-width:425px){
        display: none;
    }
`

export const Div_options_Title = styled.a`
    font-weight: 500;
    font-size: 1rem;
    color: #1B4B66;
    text-decoration: none;
`

export const Div_options_TitleGray = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: #626262;
`

export const H1_main = styled.h1`
    font-weight: 600;
    font-size: 2.125rem;
    color: #1B4B66;
    margin-bottom: 2rem;
    @media (max-width:425px){
        font-size: 1.125rem;
    }
`

export const Div_order = styled.div`
    width: 30%;
`

export const P_order = styled.p`
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;

`

export const Button_order = styled(Button)`
    width: 11.25rem;
`

export const Button_continue = styled.button`
    border: 2px solid #1B4B66;
    border-radius: 8px;
    width: 11.25rem;
    height: 2.5rem;
`