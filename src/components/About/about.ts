import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 1rem;
    margin-bottom: 10rem;
    
`

export const Figure_banner = styled.figure`
    width: 100%;

    img {

        width:100%;
        @media (max-width: 375px) {
            width: 110%;
        }

        @media (max-width: 320px) {
            width: 128%;
        }
    }
`

export const Section_Center = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;

    h2 {
        font-weight: 600;
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        color: #626262;
        width: 44.563rem;
        

        @media (max-width: 425px) {
            font-size: 0.8rem;
            width: 23.563rem;
            margin-bottom: 1rem;
        }

        @media (max-width: 320px) {
            width: 21.563rem;
            margin-left: 4rem;
        }
    }
`

export const Section_row = styled.section`

    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 4rem;

    @media (max-width: 425px) {

        flex-direction: column;
        justify-content: center;
        text-align: center;
    }


    img {
        width: 48%;
        @media (max-width: 425px) {
            width: 90%;
        }

        @media (max-width: 320px) {
            width: 110%;
            margin-left: 4rem;
        }
    }

    h2 {
        font-weight: 600;
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        color: #626262;
        width: 31.063rem;
        margin-bottom: 1rem;

        @media (max-width: 425px) {
            font-size: 0.8rem;
            width: 22.563rem;
        }

        @media (max-width: 320px) {
            width: 21.563rem;
            margin-left: 4rem;
        }
    }

`

export const Section_row_reverse = styled(Section_row) `
    flex-direction: row-reverse;

    @media (max-width: 425px) {
        flex-direction: column;
        justify-content: center;
    }
`