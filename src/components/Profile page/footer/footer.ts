import styled from 'styled-components'

export const Footer_mobile = styled.section`
    @media (max-width:425px) {
        display: none;
    }
`

export const Footer_content = styled.footer`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2% 1% 0 4%;
    background-color: #1B4B66;
    color: #FFFFFF;
    width: 100%;
    margin-top: -6rem;

    @media (max-width:425px) {
        flex-direction: column;
        display: none;
        padding-bottom: 4rem;
    }

    @media (max-width:375px) {
       width:113%;
    }

    @media (max-width:375px) {
       width:133%;
    }
`

export const ShopCategory = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
    padding-bottom: 2rem;
`

export const DivLogos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 23rem;
    @media (max-width:425px) {
        margin-left: 0rem;
    }
`

export const DivLocation = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
    align-items: center;
    @media (max-width:425px) {
        justify-content: flex-start;
    }
`
export const Footer_title = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;
`

export const Footer_links = styled.a`
    font-weight: 500;
    color: #B6B6B6;
    text-decoration: none;
    margin-bottom: 0.5rem;
    
`

export const Img_Logos = styled.img `
    width: 70%;
    margin-left:30%;
    @media (max-width:425px) {
        margin-left:0;
    }
`

export const DivMore = styled.div`
    display: none;
    @media (max-width:425px) {
        display: block;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        margin-top: -5rem;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width:320px) {
        display: block;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        margin-top: -5rem;
        display: flex;
        justify-content: space-between;
        width: 120%;
    }
`

export const H2_more = styled.h2`

    @media (max-width:425px) {
        font-weight: 500;
        font-size: 0.875rem;
        color: #626262;
    }

`

export const Img_more_down = styled.img`

`

export const Img_more_up = styled.img`
    display: none;

`