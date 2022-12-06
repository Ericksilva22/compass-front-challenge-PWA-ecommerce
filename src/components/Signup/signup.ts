import styled from 'styled-components'

export const Main = styled.main`

    @media (min-width:1040px) {
        background-image: url("./src/assets/Images/Home Page/Shopware-Cover-final.png");
        background-position: cover;
        background-repeat: no-repeat;
        width: 100.7%;
        height: 100vh;
        margin-left: -0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Figure = styled.figure`
    
    @media (max-width: 425px) {
        height: 140vh;
    }

    @media (max-width: 375px) {
        height: 120vh;
    }

    @media (max-width: 320px) {
        height: 100vh;
    }
`

export const Img_mobile = styled.img`
    display: none;
    @media (max-width: 425px) {
        display: block;
        width: 100%;
    }
`
export const Div_account = styled.div`

    @media (min-width: 445px) {
        text-align: center;
        background-color: #FFFFFF;
        width: 40rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border-radius:16px;

        h1 {
            margin-top: 2rem;
            color: #1B4B66;
        }

        button {
            width: 80%;
            height: 44px;
            border: none;
            background-color: #1B4B66;
            border-radius: 8px;
            margin-top: 2rem;

            a {
                color: #FFFFFF;
                text-decoration: none;
                font-weight: 600;
                font-size: 0.875rem;
            }
        }

        h3{
            font-weight: 600;
            font-size: 1rem;
            padding-bottom: 1rem;
            margin-left: 2%;
            margin-top: 1rem;
        }
    }
    
   
    @media (max-width: 425px) {
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: rgb(228, 228, 228);

        h1{
            font-weight: 700;
            font-size: 1.875rem;
            padding-bottom: 1rem;
        }

        button {
            width: 100%;
            height: 44px;
            border: none;
            background-color: #1B4B66;
            border-radius: 8px;

            a {
                color: #FFFFFF;
                text-decoration: none;
                font-weight: 600;
                font-size: 0.875rem;
            }
        }

        h3{
            font-weight: 600;
            font-size: 0.875rem;
            padding-bottom: 1rem;
            margin-left: 30%;
            margin-top: 1rem;
        }
    }

    @media (max-width: 375px) {
        h1{
            font-size: 1.775rem;
        }

        h3{
            margin-left: 25%;
        }
    }


    @media (max-width: 320px) {
        h1{
            font-size: 1.475rem;
        }

        h3{
            margin-left: 20%;
        }
    }
`
