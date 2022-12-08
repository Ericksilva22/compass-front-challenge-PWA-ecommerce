import styled from 'styled-components'

import { Div_options} from '../../Product page/main coach/mainCoach'

export const H1 = styled.h1`
    font-weight: 600;
    font-size: 2.125rem;
    color:  #1B4B66;
    margin: 1rem 0 1rem 1rem; 

    @media (max-width:425px) {
        font-size: 1.25rem;
        margin-left: 1.6rem;
    }
`

export const Div_Titles = styled(Div_options)`
    margin: 2rem 1rem 2rem 1rem;
`


export const Main = styled.main`
    background: #F1F1F1;
    width: 75%;
    float: right;
    height: 38rem;
    margin-top: -39.5rem;
    border-radius: 8px;
    padding-right: 1rem;
    display: flex;
    justify-content: center;

    @media (max-width:425px) {
        display: none;
    }
`