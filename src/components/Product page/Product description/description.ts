import styled from 'styled-components'

export const Section_description = styled.section`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 12rem;
    @media (max-width: 425px) {
        margin-bottom: -19rem;
    }
    
`
export const Nav_description = styled.nav`
    width:100%;
    @media (max-width: 425px) {
        display: none;
    }
`   

export const Ul_description = styled.ul`
    display: flex;
    align-items:center;
    justify-content: flex-start;
    width: 100%;
    background-color: #F1F1F1;
    border-radius: 12px;
    padding-left: 0.8rem;
`

export const Li_description = styled.li`
    padding: 0.3rem;
    list-style: none;
    font-weight: 500;
    font-size: 1rem;
    color: #FFFFFF;
    background-color: #1B4B66;
    width: 13%;
    text-align:center;
    border-radius: 8px;
`

export const Li_related = styled.li`
    padding: 0.8rem;
    list-style: none;
    font-weight: 500;
    font-size: 1rem;
    color: #626262;
    width: 15%;
    text-align: center;
`

export const Div_P = styled.div`
   margin:1rem 0;
   padding-right: 5rem;
   @media (max-width: 425px) {
        display: none;
    }
`

export const P_Description = styled.p`
    margin-bottom: 1rem;
    font-weight: 500;
    color: #626262;
`

export const Div_mobile = styled.div`
    display: none;
    @media (max-width: 425px) {
        display: block;
        margin-bottom: 1rem;
    }

`

export const Div_product = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    @media (max-width: 375px) {
        width:110%
    }

    @media (max-width: 320px) {
        width:130%
    }


`

export const H4_product = styled.h4`
    font-weight: 600;
    font-size: 0.875rem;

`

export const P_product = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: #626262;
    display: none;

`

export const P_review = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: #626262;
    display: none;
`

export const Icon_down = styled.img`
    display: none;

`

export const Img_invite_mobile = styled.img`
    margin-top: 0.5rem;
    width:70%;
    @media (max-width: 375px) {
        width:90%
    }

    @media (max-width: 320px) {
        width:130%
    }
`

export const Img_also_mobile = styled.img`
    width:80%;
    @media (max-width: 375px) {
        width:110%
    }

    @media (max-width: 320px) {
        width:130%
    }
`

