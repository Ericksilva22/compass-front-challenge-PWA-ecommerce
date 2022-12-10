import styled from 'styled-components'

import { Button } from '../My Adress Book/book'

export const Main = styled.main`
    margin: 2% 1% 8% 1%;
    display: flex;
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
        margin-left: 2rem;
        margin-top: -1.4rem;
        
    }
`

export const H2_main = styled.h2`
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    @media (max-width:425px){
        font-size: 1rem;
    }
`

export const Section = styled.section`
    width:55%;
    display: flex;
    flex-direction: column;
`

export const Div_flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 1rem;

    @media (max-width: 425px) {
        width: 180%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export const Form = styled.form`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px) {
       flex-direction: column;
    }
`

export const H3_main = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.8rem;
`

export const Div_flex_form = styled.div`

`

export const Div_input = styled.div`
    margin-bottom: 1rem;
    @media (max-width:425px){
        margin-left: 1rem;
    }
`

export const Input = styled.input`
    background-color:#F1F1F1;
    border: none;
    border-radius: 4px;
    width:17.938rem;
    height: 3.25rem;
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
       width: 180%;
    }

`

export const Input_DDNumber = styled(Input)`
    width: 4.2rem;
    margin-right: 1.4rem;
    margin-left: 1rem;
    @media (max-width:425px){
       display: none;
    }
`

export const Input_second = styled(Input)`
    width: 23.928rem;
    margin-left: 0.8rem;
    @media (max-width:425px){
       width: 180%;
       margin-left: 0rem;
    }
`

export const Link = styled.a`
    font-weight: 600;
    font-size: 0.875rem;
    color: #1B4B66;

    @media (max-width:425px){
        display: none;
    }
`

export const Img_none = styled.img`
    display: none;
    cursor: pointer;
`

export const Img_block = styled.img`
    cursor: pointer;
`

export const Img_arrow_mobile = styled.img`
    display: none;

    @media (max-width: 425px){
        display: inline-block;
        margin-left: 1rem;
    }
`

export const Section_payments = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media (max-width:425px){
        flex-direction: column;
        justify-content: center;
    }
`

export const Payment_options = styled.form`
    border: 1px solid #E3E3E3;
    border-radius: 12px;
    padding: 0.5rem 0.5rem;
    width: 10rem;
    height: 7.938rem;

    @media (max-width:425px){
       margin-left: 10rem;
       margin-bottom: 1rem;
    }
    
`

export const Input_radio = styled.input`
    margin-left: 6rem;
`

export const Label = styled.label`
    display: block;
    cursor: pointer;
    
    h5 {
        font-weight: 500;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 0.4rem;
    }
`

export const Img_creditCard = styled.img`
    margin-left: 3rem;
`

export const Label_second = styled(Label)`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    h5 {
        margin-left: 1rem;
    }
`

export const Input_Option_second = styled(Input)`
    float: right;
    width:2%;
    margin-top: -4rem;

    @media (max-width:425px) {
        width:10%;
        margin-right: -10rem;
    }
`

export const Input_text = styled.input`
    border: 1px solid #639599;
    border-radius: 4px;
    margin-top: 1rem;
    width: 18rem;
    height: 2.5rem;
    padding-left: 1rem;

    &::-webkit-input-placeholder{ /* Chrome/opera/Safari */
        font-weight: 400;
        font-size: 1rem;
        color:#B6B6B6; 
    }

    &::-moz-placeholder{ /* Firefox 19+ */
        font-weight: 400;
        font-size: 1rem;
        color:#B6B6B6;
    }


`

export const Button_adress = styled(Button)`
    width: 100%;

    @media (max-width:425px) {
        width: 154%;
    }

    @media (max-width:375px) {
        width: 164%;
    }

    @media (max-width:320px) {
        width: 160%;
    }
`

export const Div_delivery = styled.div`

    margin-bottom: 2rem;

    @media (max-width:425px) {
        width: 155%;
        margin-left: 1.4rem;
    }
   
`
export const Input_delivery = styled.input`
    margin-right: 1rem;
    cursor: pointer;

`

export const Label_delivery = styled.label`
    color: #626262;
    cursor: pointer;

    @media (max-width:425px) {
        font-size: 0.875rem;
    }
`

export const Div_type_adress = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin-bottom: 2rem;
    margin-top: -1rem;
    cursor: pointer;

    @media (max-width:425px) {
        width:100%;
        margin-left: 1.8rem;
       
    }

    @media (max-width:375px) {
        width:110%;
        margin-left: 1.2rem;
       
    }

    @media (max-width:320px) {
        width:120%;
        margin-left: 1.2rem;
       
    }


    div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #626262;
        border-radius: 8px;
        width: 4rem;
        height: 2rem;
        background-color: #F1F1F1;
    }

    H4 {
        font-weight: 500;
        font-size: 0.875rem;
    }
`