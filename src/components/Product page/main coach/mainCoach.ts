import styled from 'styled-components'

export const Main_coach = styled.main`
    margin-top: 4rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
    font-family: 'Inter', sans-serif;
`

export const Div_options = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   width: 20%;
`

export const Div_options_Title = styled.a`
    font-weight: 500;
    font-size: 1rem;
    color: #1B4B66;
    text-decoration: none;
    @media (max-width:425px) {
        display: none;
    }
`

export const Div_options_TitleGray = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: #626262;
    @media (max-width:425px) {
        display: none;
    }
`

export const Div_content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    @media (max-width:425px) {
        flex-direction: column;
    }
`

export const Figure = styled.figure`
    width: 50%;
    @media (max-width:425px) {
        width: 95%;
    }

`

export const Img_Main = styled.img`
    width: 100%;
    border-radius: 16px;
`

export const Div_description_product = styled.div`
    width: 48%;
`

export const H1_description_product = styled.h1`
    font-weight: 600;
    font-size: 2.125rem;
    margin-bottom: 0.5rem;
`

export const P_description_product = styled.p`
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: #626262;
    @media (max-width:425px) {
        font-weight: 500;
        font-size: 0.875rem;
        width: 200%;
    }

`

export const Div_ratings = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 42%;
    margin-bottom: 1.5rem;
    @media (max-width:425px) {
        display: none;
    }
`

export const P_ratings = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: #b6b6b6;
`

export const Div_prices = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    padding-bottom: 1rem;
`

export const P_price = styled.p`
    font-weight: 700;
    font-size: 2.5rem;
    @media (max-width:425px) {
        font-weight: 600;
        font-size: 1.2rem;
        margin-right: 0.5rem;
    }
`

export const P_priceOriginal = styled.p`
    font-weight: 700;
    font-size: 2.125rem;
    color: #B6B6B6;
    text-decoration: line-through;
    @media (max-width:425px) {
        font-weight: 500;
        font-size: 0.875rem;
        margin-right: 0.5rem;
    }
    
`

export const P_priceOFF = styled.p`
    font-weight: 600;
    font-size: 1.25rem;
    color: #FF404B;
    @media (max-width:425px) {
        font-weight: 500;
        font-size: 0.875rem;
    }
`

export const Div_details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width:98%;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    @media (max-width: 425px) {
        flex-direction: column;
    }
`

export const Div_check = styled.div`
    width:40%;
    padding-top: 2rem;
    @media (max-width: 425px) {
        width:100%;
    }
`

export const H3_Div_check = styled.h3`
   font-weight:600;
   font-size:1.25rem;
   margin-bottom: 0.5rem;
`

export const P_Div_check = styled.p`
   font-weight:500;
   font-size:1rem;
   color: #626262;
   @media (max-width: 425px) {
        width:200%;
        margin-bottom: 1rem;
    }
`

export const Div_apply = styled.div`
    width:75%;
    background-color:#F1F1F1F1;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    @media (max-width: 425px) {
        width:200%;
        margin-left: 12rem;
    }

    @media (max-width: 375px) {
        width:230%;
        margin-left: 14rem;
    }

    @media (max-width: 320px) {
        width:270%;
        margin-left: 15rem;
    }
`

export const P_Div_apply = styled.p`
   font-weight: 500;
   font-size: 1rem;
   color: #626262;
`

export const A_Div_apply = styled.a`
    font-weight: 600;
    font-size: 0.875rem;
    color: #1B4B66;
    text-decoration: none;
`

export const Div_quantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 30%;
    @media (max-width: 425px) {
        display: none;
    }
`

export const H4_quantity = styled.h4`
    font-weight: 600;
    font-size: 1.25rem;
    text-align:center
`

export const Div_PlusorLess = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    border: 1px solid #1B4B66;
    border-radius: 4px;
`

export const P_quantity = styled.p`
    font-weight: 400;
    font-size: 0.875rem;
    text-align:center;
    padding-left: 0.1rem;   
`

export const Div_buttons = styled.div`
    margin-top: 2rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    @media (max-width:425px) {
        flex-direction: row-reverse;
        width: 200%;
    }
    @media (max-width:375px) {
        width: 220%;
    }

    @media (max-width:320px) {
        width: 260%;
    }
`

export const Btn_Bag = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54%;
    height: 44px;
    border-radius: 8px;
    border: none;
    background: #1B4B66;
    color: #FFFFFF;
    cursor:pointer;
    @media (max-width:425px) {
        width:90%;
        margin-left: 0.5rem;
    }

    @media (max-width:375px) {
        width:200%;
        margin-left: 1rem;
        
    }

`

export const P_BtnBag = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    padding-left: 0.6rem;
   
`


export const Btn_Wish = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 44px;
    border-radius: 8px;
    border: 2px solid #1B4B66;
    color: #1B4B66;
    cursor: pointer;
    background-color: #FFFFFF;
    @media (max-width:425px) {
        width:10%;
        border: none;
    }

`

export const P_Wish = styled.button`
    font-weight: 600;
    font-size: 0.875rem;
    color: #1B4B66;
    border: none;
    background-color: #FFFFFF;
    @media (max-width:425px) {
        display: none;

    }

`

export const Div_coachImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media (max-width:425px) {
        display: none;
    }
`

export const Img_blossom_pre = styled.img`
    width: 14%;
    border-radius: 8px;
`


export const Icon_arrow = styled.img`
    @media (max-width:425px) {
        display: none;
    }

`

export const Icon_arrow_mobile = styled.img`
    display: none;
    @media (max-width:425px) {
        display: block;
    }

`



export const Div_ratings_mobile = styled.div`
    display: none;
    @media (max-width:425px) {
        display: block;
    }


`