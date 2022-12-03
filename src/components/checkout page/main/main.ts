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
        margin-left: 2rem;
        margin-top: -1.4rem;
        
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
`

export const Div_flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 1rem;

    @media (max-width: 425px) {
        width: 180%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export const Form = styled.form`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px) {
       flex-direction: column;
    }
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
    @media (max-width:425px){
        margin-left: 1rem;
    }
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

    @media (max-width:425px){
       width: 180%;
    }

`

export const Input_DDNumber = styled(Input)`
    width: 4.2rem;
    margin-right: 1.4rem;
    margin-left: 1rem;
    @media (max-width:425px){
       display: none;
    }
`

export const Input_second = styled(Input)`
    width: 23.928rem;
    margin-left: 0.8rem;
    @media (max-width:425px){
       width: 180%;
       margin-left: 0rem;
    }
`

export const Div_flex_next = styled(Div_flex)`
    border:none;
`

export const Link = styled.a`
    font-weight: 600;
    font-size: 0.875rem;
    color: #1B4B66;

    @media (max-width:425px){
        display: none;
    }
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

    @media (max-width:425px) {
        width:388px;
    }
`

export const Img_none = styled.img`
    display: none;
    cursor: pointer;
`

export const Img_block = styled.img`
    cursor: pointer;
`

export const Img_arrow_mobile = styled.img`
    display: none;

    @media (max-width: 425px){
        display: inline-block;
        margin-left: 1rem;
    }
`

export const Section_payments = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media (max-width:425px){
        flex-direction: column;
        justify-content: center;
    }
`

export const Payment_options = styled.form`
    border: 1px solid #E3E3E3;
    border-radius: 12px;
    padding: 0.5rem 0.5rem;
    width: 10rem;
    height: 7.938rem;

    @media (max-width:425px){
       margin-left: 10rem;
       margin-bottom: 1rem;
    }
    
`

export const Input_radio = styled.input`
    margin-left: 6rem;
`

export const Label = styled.label`
    display: block;
    cursor: pointer;
    
    h5 {
        font-weight: 500;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 0.4rem;
    }
`

export const Img_creditCard = styled.img`
    margin-left: 3rem;
`

export const Label_second = styled(Label)`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    h5 {
        margin-left: 1rem;
    }
`

export const Input_Option_second = styled(Input)`
    float: right;
    width:2%;
    margin-top: -4rem;

    @media (max-width:425px) {
        width:10%;
        margin-right: -10rem;
    }
`

export const Input_text = styled.input`
    border: 1px solid #639599;
    border-radius: 4px;
    margin-top: 1rem;
    width: 18rem;
    height: 2.5rem;
    padding-left: 1rem;

    &::-webkit-input-placeholder{ /* Chrome/opera/Safari */
        font-weight: 400;
        font-size: 1rem;
        color:#B6B6B6; 
    }

    &::-moz-placeholder{ /* Firefox 19+ */
        font-weight: 400;
        font-size: 1rem;
        color:#B6B6B6;
    }


`

export const P_options = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: #A7A7A7;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
`

export const Div_none = styled.div`
    display: none;
    margin-bottom: 1rem;

    h4 {
        color: #626262;
        font-size: 0.875rem;
        display: inline;
    }
`