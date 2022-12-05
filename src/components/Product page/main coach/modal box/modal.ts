import styled from 'styled-components'

export const Fade = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
    display: none;
`

export const Modal_container = styled.div`
    position: fixed;
    left: 90%;
    top: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    width: 394px;
    height: 597px;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    transition: 0.4s;
    opacity: 1;
    pointer-events: all;
    background-color: #FFFFFF;
    display: none;
`

export const Div_back = styled.div`
    display: flex; 
`

export const Div_card_flex = styled.div`
    display: flex; 
    width:85%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 2rem;
    margin-top: 2rem;
`

export const Div_description = styled.div`
    width: 100%;
`

export const Div_title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding-left: 0.5rem;
`

export const H3_title = styled.h3`
    font-weight: 500;
    font-size: 1rem;
`

export const H2_back = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: #1B4B66;
    margin-left: 1rem;
`

export const P_title = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: #626262;
    padding-left: 0.5rem;
    margin-bottom:0.5rem;
`

export const Div_flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`

export const Div_quantity = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #1B4B66;
    border-radius: 4px;
    margin-left: 0.5rem;

`

export const Div_prices = styled.div `
    width:86%;
`

export const H5_prices = styled.h5`
    font-weight: 400;
    font-size: 0..875rem;
`

export const Div_apply = styled.div`
    background-color:#F1F1F1F1;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

export const P_Div_apply = styled.p`
   font-weight: 500;
   font-size: 1rem;
   color: #626262;
`

export const A_Div_apply = styled.a`
    font-weight: 600;
    font-size: 0.875rem;
    color: #1B4B66;
    text-decoration: none;
`

export const Btn_Order = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    border-radius: 8px;
    border: none;
    background: #1B4B66;
    color: #FFFFFF;
    width:100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #FFFFFF;
    }
`

export const P_BtnOrder = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    padding-left: 0.6rem;
`

export const P_continue = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 1rem;
    text-decoration-line: underline;
    cursor: pointer;
`

export const Img_pointer = styled.img`
    cursor: pointer;
`

export const Img_modal_pre = styled.img`
    width: 80%;
    border-radius: 4px;
`