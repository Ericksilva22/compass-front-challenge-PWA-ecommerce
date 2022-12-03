import styled from 'styled-components'

export const Aside = styled.aside`
    margin-top: 9rem;
    margin-left: 12rem;
    width:30%;

    @media (max-width:425px) {
        display:none;
    }
`

export const H1_order = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const Div_flex = styled.div`
    display: flex;
    margin-bottom: 2rem;

`

export const Figure = styled.figure`
    margin-right: 1rem;

`

export const H3_order = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.5rem;
`

export const P_order = styled.p`
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #626262;
`

export const Div_details = styled.div`
    display: flex;
    justify-content: space-between;

`

export const P_details = styled(P_order)`
    font-weight: 500;
`