import styled from 'styled-components'

export const Aside = styled.aside`
    margin-bottom: 8rem;
    margin-left: 1rem;
    width:17.875rem;
    height: 31.5rem;
    
    

    nav {
        list-style: none;
        background: #F1F1F1;
        width: 100%;
        border-radius: 8px;
        padding-top: 0.5rem;
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
`