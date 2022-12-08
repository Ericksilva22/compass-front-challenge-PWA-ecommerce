import styled from 'styled-components'

export const Header_mobile = styled.header`
    margin: 2rem 0 1rem 1rem;

    @media (min-width: 426px) {
        display: flex;
        align-items: center;
        justify-content: center;

    }
`

export const Main = styled.main`

    @media (min-width: 426px) {
        margin-bottom: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }


    figure {

        @media (max-width:425px){
            margin-top: 4rem;
            margin-left: 6rem;
            margin-bottom: 1rem;
            width: 14.938rem;
        }

        @media (max-width:375px) {
            margin-left: 4.5rem;
        }

        @media (max-width:320px) {
            margin-left: 3rem;
        }

        img {
            width: 100%;
        }
    }

    h3 {

        @media (max-width:425px){
            font-size: 0.875rem;
            font-weight: 500;
            text-align:center;
            margin-bottom: 2rem;
        }
        

        @media (max-width:320px) {
            font-size: 0.8rem;
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

    h4 {

        color: #626262;
        margin-bottom: 2rem;

        @media (max-width:425px) {
            font-weight: 500;
            font-size: 0.75rem;
            
            margin-left: 10rem;
            
        }
        
        @media (max-width:375px) {
            margin-left: 8rem;
        }

        @media (max-width:375px) {
            margin-left: 6rem;
        }
    }

    h5 {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;

    }

    p {
        font-size: 0.875rem;
        font-weight: 500;
        width: 240px;
        border: 1px dashed #1B4B66;
        padding: 1rem 0 1rem 5rem;
        margin-left: 6rem;
        border-radius: 4px;
        margin-bottom: 1rem;
        background-color: #F9F9F9;

        @media(min-width:426px) {
            margin-left: 0rem;
            margin-top: 1rem;
        }

        @media (max-width:375px) {
            margin-left: 4.4rem;
        }

        @media (max-width:320px) {
            margin-left: 2.3rem;
        }
    }

    ul {
        margin-left: 2.5rem;
        padding-right: 2rem;
        margin-bottom: 2rem;
    }

    li {
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color:#626262;
    }
`

export const Button = styled.button`

    width: 90%;
    height: 2.75rem;
    margin-left: 1.5rem;
    border-radius: 8px;
    border: none;
    background-color:#1B4B66;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
    }

    @media (min-width:426px) {
        width: 60%;
        margin-top: 1rem;
        margin-left: 0rem;
    }
    

    @media (max-width:375px) {
        margin-left: 1.2rem;
    }
`