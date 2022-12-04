import styled from 'styled-components'

export const Main = styled.main`
    font-family: 'Inter', sans-serif;
    margin: 4rem 1rem 10rem 1rem;
    @media (max-width:425px){
        margin-bottom: 4rem;
    }
`

export const Figure_banner = styled.figure`
    width: 100%;
    margin-bottom: 4rem;
    @media (max-width:425px){
        display: none;
    }
`

export const Content_banner = styled.img`
    width: 100%;
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

export const Img_arrow_mobile = styled.img`
    display: none;
    @media (max-width: 425px) {
        display: inline;
        margin-right: 2rem;
        float: left ;
    }
    
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

export const Section_content = styled.section`
    display: flex;
    width:100%
`

export const Side_menu = styled.aside`
    width:20%;
    @media (max-width:425px){
        display: none;
    }
`

export const Div_side = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
`

export const Title_side = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: #13101E;
`

export const Less_side = styled.img`
    padding-right: 0.45rem;
`

export const Label_Side = styled.label`
    margin-left: 0.5rem;
    color: #626262;
`

export const Section_options = styled.section`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2.2rem;
    @media (max-width:425px){
        display: none;
    }
`

export const Img_options = styled.img`
    margin-left: 0.2rem;
    margin-right: 0.4rem;
`
export const P_show_items = styled.p`
    font-weight: 500;
    font-size: 1rem;
    margin-right: 14rem;
    color: #171520;
`

export const P_sort = styled.p`
    font-weight: 500;
    font-size: 1rem;
    margin-right: 2rem;
    color: #171520;
`

export const Span_show = styled.span`
    background-color: #F1F1F1;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    color: #626262;
    margin-right: 8rem;
`

export const Select_show = styled.select`
    background: #F1F1F1;
    border-radius: 4px;
    border: none;
    padding: 0.8rem 2rem;
    color: #626262;
    font-weight: 500;
    font-size: 0.8rem;
    
`

export const Option_show = styled.option`
    color: #626262;
    font-weight: 500;
`

export const ArrivalsTitle = styled.h1`
    font-size: 2.125rem;
    font-weight: 600;
`
export const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width:6.5rem;

`

export const Arrivalsh3 = styled.h3`
    font-weight: 600;
    font-style: 0.875rem;
    color: #1B4B66;
`

export const Section_cards = styled.section`
    width: 80%;
    margin-left: 1rem;
`

export const DivArrivalsItens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin-bottom: 4rem;
    @media (max-width: 425px) {
        flex-direction: column;
        width:50%;
    }
` 

export const DivArrivalsItens_none = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin-bottom: 4rem;
    @media (max-width: 425px) {
        display:none;
    }
` 

export const DivArrivalsItens_float = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin-bottom: 4rem;
    @media (max-width: 425px) {
        float: right;
    }
` 

export const DivArrivalsItensTwo = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin-bottom: 4rem;
` 

export const ArrivalsItens = styled.div`
    display: flex;
    flex-direction: column;
    width: 28%;
    @media (max-width: 425px) {
        width:90%;
        
    }
`

export const ArrivalsItensName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width:100%;
`

export const ArrivalsItensh4 = styled.h4`
    font-weight: 500;
    font-size: 1rem;
    color: #171520;
`

export const ArrivalsItensP = styled.p`
   font-weight: 400;
   font-size: 0.875rem;
   color: #626262;
   margin-top: 0.5rem;
`

export const ArrivalsItensPrice = styled.p`
    font-weight: 500;
    font-size: 1rem;
    @media (max-width: 425px) {
        font-weight: 500;
        font-size: 0.875rem;
    }
    
`

export const Card_img = styled.img`
   border-radius: 16px;
   @media (max-width: 425px) {
        width:100%;
   }
`

export const Rating = styled.div`
    display: flex;
    margin-top: 1rem;
    align-items: center;
    @media (max-width: 425px) {
        display:none;
    }
`

export const P_Rating = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: #1B4B66;
    margin-left: 0.8rem;
`

export const Div_prices = styled.div`
    display: flex;
    align-items: center;
    height: 2rem;

`

export const P_priceOriginal = styled.p`
    font-weight: 700;
    font-size: 0.875rem;
    color: #B6B6B6;
    text-decoration: line-through;
    margin-left: 0.8rem;
    @media (max-width: 425px) {
        font-weight: 500;
        font-size: 0.6rem;
    }
`

export const P_priceOFF = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: #FF404B;
    margin-left: 0.8rem;
    @media (max-width: 425px) {
        font-weight: 500;
        font-size: 0.6rem;
    }
`

export const Section_selectPage = styled.section`
    display: flex;
    width: 52%;
    @media (max-width: 425px) {
        display:none;
    }
`
export const Div_pages = styled.div`
    border-radius:12px;
    background-color: #F1F1F1;
    width: 55%;
    display: flex;
    margin-left: 17rem;
    @media (max-width: 425px) {
        width: 25%;
    }
   
`

export const Div_next = styled.div`
    border-radius:12px;
    background-color: #F1F1F1;
    width: 15%;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 425px) {
        margin-left: 8rem;
    }
`

export const Link_next = styled.a `
    font-weight: 500;
    font-size: 0.8rem;
    color: #626262;
    text-decoration: none;
`

export const Link_selectPage = styled.a`
    padding: 0.8rem 1.6rem;
    color: #626262;
    border-radius:12px;
    text-decoration: none;
`

export const Link_selectPage_actived = styled.a`
    padding: 0.8rem 1.6rem;
    background: #1B4B66;
    color: #FFFFFF;
    border-radius:12px;
    text-decoration: none;
`

export const Div_mobile = styled.div`
    @media (max-width: 425px) {
        display: flex;
        width: 120%;
    }
`

export const Div_sort_mobile = styled.div`
    display: none;
    @media (max-width: 425px) {
        display: block;
        width: 120%;
        margin-top: -4rem;
    }
`