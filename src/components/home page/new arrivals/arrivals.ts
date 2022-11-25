import styled from 'styled-components'

export const SectionArrivals = styled.section`
    margin-bottom: 2rem;
    margin-top: -20rem;
    @media (max-width:375px) {
        width:110%;
    }

    @media (max-width:320px) {
        width:130%;
    }
`

export const DivArrivals = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`

export const ArrivalsTitle = styled.h1`
    font-size: 2.125rem;
    font-weight: 600;

    @media (max-width:425px) {
        font-size: 1rem;
    }
`
export const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width:6.5rem;

    a {
        text-decoration: none;
    }

`

export const Arrivalsh3 = styled.h3`
    font-weight: 600;
    font-style: 0.875rem;
    color: #1B4B66;

    @media (max-width:425px) {
        font-size: 1rem;
    }
`

export const DivArrivalsItens = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media (max-width:375px) {
        padding-left: 1rem;
    }
` 

export const ArrivalsItens = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`

export const ArrivalsItensName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

export const ArrivalsItensh4 = styled.h4`
    font-weight: 500;
    font-size: 1rem;
    color: #171520;
    @media (max-width:425px) {
        font-size: 0.7rem;
    }
`

export const ArrivalsItensP = styled.p`
   font-weight: 400;
   font-size: 0.875rem;
   color: #626262;
   margin-top: 0.5rem;

   @media (max-width:425px) {
        font-size: 0.7rem;
    }
`

export const ArrivalsItensPrice = styled.p`
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.5rem;
    @media (max-width:425px) {
        font-size: 0.7rem;
    }
`

export const Icon_like = styled.img`

    @media (max-width:425px) {
        width: 20%;
    }
`

export const Img_width = styled.img`
    @media (max-width:425px) {
        width: 110%;
    }

`


