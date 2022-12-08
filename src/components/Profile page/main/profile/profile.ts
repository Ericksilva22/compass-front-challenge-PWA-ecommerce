import styled from 'styled-components'

export const Div_profile = styled.div`
    width: 20.5rem;
    height: 7rem;
    border-radius: 8px;
    background-color: #F1F1F1;
    margin-left: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (min-width:426px) {
        display: none;
    }

    @media (max-width: 425px) {
        width: 23.5rem;
    }

    @media (max-width: 375px) {
        width: 20.5rem;
    }

    @media (max-width: 320px) {
        width: 17.5rem;
    }
`

export const Image_profile = styled.img`
    width: 20%;
    border-radius: 99999px;
`

export const Name_profile = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;

    @media (max-width: 375px) {
        font-size: 1rem;
    }

    @media (max-width: 320px) {
        font-size: 0.875rem;
    }
`

export const Email_profile = styled.h2`
    font-weight: 500;
    font-size: 0.875rem;
    color: #7E7E7E;
    margin-top: 0.2rem;

    @media (max-width: 320px) {
        font-size: 0.7rem;
    }
`
export const Phone_profile = styled(Email_profile)``

