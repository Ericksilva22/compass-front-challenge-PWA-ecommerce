import styled from 'styled-components'

export const SectionHand = styled.section`
    background-color: #1B4B66;
    color: #FFFFFF;
    @media (max-width:375px) {
        width:113%
    }

    @media (max-width:320px) {
        width:133%
    }
`

export const Handpickedh1 = styled.h1`
   font-size: 2.125rem;
   font-weight: 600;
   padding: 2rem 2rem;
`

export const DivCollections = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 2rem;

    @media (max-width:425px) {
        flex-wrap: wrap;
        margin-left: 1.5rem;
    }

    
`

export const Img_flex = styled.img`

    @media (max-width:425px) {
        width:90%;
        margin-bottom:1rem;
    }  
`
export const Div_flex = styled.div`
    @media (max-width:425px) {
        flex-grow: 1;
        width: 50%;
    }  
`


