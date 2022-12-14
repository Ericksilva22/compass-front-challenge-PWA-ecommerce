import styled from 'styled-components'
import { Div_options_TitleGray } from '../../../Product page/main coach/mainCoach'
import { Headerinput } from '../../header/header'
import { Div_Titles } from '../../main/main'
import { H1_order } from '../../../checkout page/Order/Order'

export const DiV_titles_items = styled(Div_Titles)`
    width: 40%;
`

export const Div_subtitles = styled.div`
    display: flex;
    align-items: center;

    @media (max-width:425px) {
        justify-content: flex-start;
    }

    img {

        display: none;
        @media (max-width:425px) {
            display: inline;
        }
    }


`

export const Link_profile = styled(Div_options_TitleGray)`
    
    a {
        text-decoration: none;
        color: #626262;
    }

`

export const ButtonLogout_subtitles = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width:8.5rem;
    height: 2.5rem;
    border-radius: 8px;
    border: 2px solid #1B4B66;
    margin-right: 1rem;

    @media (max-width: 425px) {
        display: none;
    }


    a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        color: #1B4B66;
    }
`

export const Div_content = styled.div`
    display:flex;

    @media (max-width: 425px) {
        flex-direction: column;
    }

`

export const Main = styled.main`
    margin-left: 1rem;
    margin-bottom: 8rem;
    width: 75%;
    border-radius: 8px;
    padding-right: 1rem;

`
export const Div_none = styled.div`

    @media (max-width: 425px) {
        display: none;
    }
`

export const Search_orders = styled(Headerinput)`
    width: 18.5rem;
    margin-right: 2rem;
    margin-left: 51rem;
    
    @media (max-width:425px) {
        display: none;
    }
`

export const Div = styled.div`
    background-color:#F1F1F1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4.25rem;
    border-radius: 12px;

    @media (max-width:425px) {
        width: 130%;
        height: 2.25rem;
    }

    @media (max-width:320px) {
        width:147%;
    }

    div {
        width: 7.563rem;
        height: 2.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left:1rem;
        border-radius: 8px;
        color: #626262;
        cursor: pointer;

        @media (max-width:425px) {
            width: 130%;
            height: 1.55rem;
        }

        
    }

    h4 {
        font-weight: 500;
        font-size: 1rem;
    }
`

export const Div_2 = styled.div`
    display: flex;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-top: 1rem;

    @media (max-width:425px) {
        display: none;
    }

    h3 {
        font-weight: 500;
        font-size: 1rem; 
        color: #626262;
        margin-right: 38rem;
    }

    h4 {
        font-weight: 500;
        font-size: 1rem; 
        color: #626262;
        margin-right: 3rem;
    }

`

export const Div_information = styled.div`
    margin-top: 2rem;
    width:30%;
    @media (max-width: 425px){
        width:40%;
    }


    * {
        border: none;
    }
   
   h2 {
        font-weight: 500;
        font-size: 1rem;
        color: #626262;
    }

    h3 {
        font-weight: 500;
        font-size: 1rem;
    }
`
export const Btn_reoder = styled.button`
    width: 8.5rem;
    height: 2.75rem;
    background-color: #1B4B66;
    border-radius: 8px;
    border: none;
    margin-right: 1rem;
    margin-left: 44rem;

    @media (max-width: 425px){
        width:125%;
        margin-left: 0.5rem;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 1rem;
    }

`

export const Btn_addBag = styled.button`
    width: 8.5rem;
    height: 2.75rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 2px solid #1B4B66;

    @media (max-width: 425px){
        display: none;
    }

    a {
        text-decoration: none;
        color: #1B4B66;
        font-weight: 600;
        font-size: 1rem;
    }
`

export const Img_bloss = styled.img`
    width: 50%;
    border-radius: 8px;

`