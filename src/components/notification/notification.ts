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
            margin-left: 1rem;
            margin-bottom: 1rem;
            width: 90%;
            
        }

        @media (max-width:375px) {
            margin-left: 1.5rem;
        }

        

        img {
            width: 100%;
            border-radius: 4px;
        }
    }

    h3 {
        font-size: 0.875rem;
        font-weight: 600;
        margin-left: 1.5rem;
        

        @media (max-width:425px){
            margin-bottom: 0.2rem;
        }
        
    }

    p {
        font-size: 0.875rem;
        font-weight: 500;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
        color: #626262;
    }
`

export const Button = styled.button`

    width: 90%;
    height: 2.75rem;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color:#FFFFFF;
    border: 2px solid #1B4B66;

    a {
        text-decoration: none;
        color: #1B4B66;
        font-weight: 600;
        font-size: 0.875rem;
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

export const Img_ellipses = styled.img`
    float: right;
    margin-top: -3rem;
`

export const Img_thumbsup = styled.img`
    margin-left: 1.4rem;
`