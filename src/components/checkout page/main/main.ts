import styled from 'styled-components'

export const Main = styled.main`
    margin: 2% 1% 8% 1%;
    display: flex;
`

export const Div_options = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   width: 13%;
   margin-bottom: 2rem;
   @media (max-width:425px){
        display: none;
    }
`

export const Div_options_Title = styled.a`
    font-weight: 500;
    font-size: 1rem;
    color: #1B4B66;
    text-decoration: none;
`

export const Div_options_TitleGray = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    color: #626262;
`

export const H1_main = styled.h1`
    font-weight: 600;
    font-size: 2.125rem;
    color: #1B4B66;
    margin-bottom: 2rem;
    @media (max-width:425px){
        font-size: 1.125rem;
    }
`

export const H2_main = styled.h2`
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    @media (max-width:425px){
        font-size: 1rem;
    }
`

export const Section = styled.section`
    width:55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const Div_flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 1rem;
`

export const Form = styled.form`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const H3_main = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.8rem;
`

export const Div_flex_form = styled.div`
    
`

export const Div_input = styled.div`
    margin-bottom: 1rem;
`

export const Input = styled.input`
    background-color:#F1F1F1;
    border: none;
    border-radius: 4px;
    width:17.938rem;
    height: 3.25rem;
    padding-left: 1rem;

    &::-webkit-input-placeholder{ /* Chrome/opera/Safari */
        font-weight: 500;
        font-size: 0.875rem;
        color:#626262; 
    }

    &::-moz-placeholder{ /* Firefox 19+ */
        font-weight: 500;
        font-size: 0.875rem;
        color:#626262;
    }

`

export const Input_DDNumber = styled(Input)`
    width: 5rem;
    margin-right: 1.4rem;
`

export const Input_second = styled(Input)`
    width: 24.438rem;
`

export const Div_flex_next = styled(Div_flex)`
    border:none;
`

export const Link = styled.a`
    font-weight: 600;
    font-size: 0.875rem;
    color: #1B4B66;
`

export const Button = styled.button`
    background: #1B4B66;
    border-radius: 8px;
    color: #FFFFFF;
    width: 136px;
    height: 44px;
    border: none;

    a{
        font-weight: 600;
        font-size:0.875rem;
        color:#FFFFFF;
        text-decoration: none;
    }
`