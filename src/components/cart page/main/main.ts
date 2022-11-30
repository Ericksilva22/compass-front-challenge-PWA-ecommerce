import styled from 'styled-components'

import { Button } from '../../checkout page/main/main'
import {Div_flex} from '../../checkout page/main/main'
import {Div_apply} from '../../modal box/modal'


export const Main = styled.main`
    margin: 2% 1% 8% 1%;
`
export const Section_cart = styled.section`
    display: flex;
    justify-content: space-between;
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

export const Div_cart = styled.div`
    width: 50%;
`

export const Div_name = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 1rem;

    p{
        font-weight: 500;
        font-size: 1rem;
        color: #626262;
    }

    div {
        display: flex;
        justify-content: space-between;
        width:40%
    }
`

export const Div_product = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Div_product_descriptions = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        
    }

`

export const Link_primary = styled.a`
    color: #1B4B66;
    font-weight: 600;
    font-size: 0.875rem;
`

export const Link_Sencondary = styled(Link_primary)`
    color: #B00020;
`

export const Div_order = styled.div`
    width: 33%;
`

export const P_order = styled.p`
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;

`

export const Button_order = styled(Button)`
    width: 11.25rem;
    height: 2.5rem;
`

export const Button_continue = styled.button`
    border: 2px solid #1B4B66;
    border-radius: 8px;
    width: 11.25rem;
    height: 2.5rem;
    color: #1B4B66;
    font-weight: 500;
    font-size: 16px;
`

export const Div_Flex_Cart = styled(Div_flex)`
    border:none;
`

export const Div_apply_cart = styled(Div_apply)`
    margin-top: 2rem;
`