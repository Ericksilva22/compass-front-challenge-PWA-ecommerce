import styled from 'styled-components'
import { Div_options_TitleGray } from '../../Product page/main coach/mainCoach'
import { Headerinput } from '../header/header'

export const Div_subtitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`

export const Div = styled.div`
    background-color:#F1F1F1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4.25rem;
    border-radius: 12px;

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

    h4 {
        font-weight: 500;
        font-size: 1rem; 
        color: #626262;
        margin-right: 6rem;
        margin-left: 4rem;
    }

`

export const Div_3 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    background: #F1F1F1;
    height: 4.875rem;
    border-radius: 8px;

    input {
        margin-left: 0.3rem;
    }

    h5 {
        font-weight: 500;
        font-size: 1rem; 
        margin-right: 2rem;
        margin-left: 3rem;
    }

    h6 {
        font-weight: 500;
        font-size: 1rem; 
        margin-right: 8rem;
        margin-left: 8rem;
        color: #1B4B66;
    }
`