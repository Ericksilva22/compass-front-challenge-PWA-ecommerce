import styled from 'styled-components'

export const Aside = styled.aside`
    margin-bottom: 8rem;
    margin-left: 1rem;
    width:17.875rem;
    height: 31.5rem;
    
    @media (max-width: 425px) {
        width: 95%;
    }

    nav {
        list-style: none;
        background: #F1F1F1;
        width: 100%;
        border-radius: 8px;
        padding-top: 0.5rem;

        @media (max-width:425px){
            background-color:#FFFFFF;
        }
    }

    ul {
       padding-right: 0.5rem;
       
    }

    li {
        height:3.375rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &:hover {
            color: #1B4B66;

            div {
           
                background-color: #1B4B66;
            
            }
        }

        div {
            width: 4px;
            height: 100%;
            border-radius: 8px;
            margin-right: 0.5rem;
        }


    }

    a {
        font-weight: 500;
        font-size: 1rem;
        text-decoration: none;
        color: #13101E;
        
    }
`

export const Link_li = styled.a`
    width: 240px;

    @media (max-width:425px) {
        width:92%;
    }
`

export const ButtonLogout_mobile = styled.button`
    display: none;

    @media (max-width:425px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 98%;
        height: 2.55rem;
        border: 2px solid #1B4B66;
        border-radius: 8px;
        margin-top: 1rem;
        background-color: #FFFFFF;

        p {
            font-weight: 600;
            font-size: 0.875rem;
            color: #1B4B66;
        }
    }
`