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
        font-size: 1.75rem;
        font-weight: 700;
        text-align:center;

        @media (max-width:425px){
            margin-bottom: 2rem;
        }
        

        @media (max-width:320px) {
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
        margin-left: 6rem;
        margin-bottom: 1rem;
        

        @media(min-width:426px) {
            margin-left: 0rem;
            margin-top: 1rem;

        }

        @media (max-width:425px) {
            margin-left: 3.4rem;
            padding-right: 2rem;
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
    margin-bottom: 1rem;
    border-radius: 8px;
    border: none;
    background-color:#1B4B66;
    color: #FFFFFF;

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

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

export const ButtonOrder = styled(Button)`
    background-color: #FFFFFF;
    margin-top: 2rem;
    border: 2px solid #1B4B66;

    a {
        color: #1B4B66;
        font-weight: 600;
        font-size: 0.875rem;
    }

`