import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: 'Inter', sans-serif;
    padding-top: 2rem;
`

export const H1 = styled.h1`
   font-weight: 700;
   font-size: 5rem;
   color: #1B4B66;
   margin-bottom: 1rem;
`

export const H2 = styled.h2`
   font-weight: 600;
   font-size: 3.125rem;
   color: #1B4B66;
   margin-bottom: 0.2rem;
   @media (max-width: 425px) {
    font-size: 2.125rem;
   }
`

export const P = styled.p`
    font-weight: 400;
    font-size: 2rem;
    color: #626262;
    margin-bottom: -0.8rem;
    @media (max-width: 425px) {
    font-size: 1.125rem;
   }

   @media (max-width: 375px) {
    font-size: 1rem;
   }

   @media (max-width: 320px) {
    font-size: 0.8rem;
   }
`

export const BtnPage404 = styled.button`
    margin-top: 4rem;
    width: 15%;
    height: 2.5rem;
    border-radius: 14px;
    border: none;
    background-color: #1B4B66;
    font-size: 0.875rem;
    font-weight: 400;
    @media (max-width: 425px) {
        width:40%;
   }

   @media (max-width: 320px) {
        width:50%;
   }
    
`

export const BtnLink = styled.a`
    color:#FFFFFF;
    text-decoration:none
    
`

