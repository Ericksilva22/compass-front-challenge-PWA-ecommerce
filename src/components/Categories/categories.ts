import styled from 'styled-components'

export const Div = styled.div`
    display: none;

    @media (max-width: 425px) {
        margin-left: 1rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: block;
    }
    
`

export const H1_categories = styled.h1`
    font-weight: 600;
    font-size:1.25rem;
    color: #1B4B66;

`
export const Section_categories = styled.section`
    

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
       

        img {
            width: 100%;
            margin-bottom: 1rem;
        }
    }
`