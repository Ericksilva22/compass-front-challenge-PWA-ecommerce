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
    left: 0;
    top: 50%;
    z-index: 10;
    width: 88%;
    height: 352px;
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
    border-radius: 20px 20px 0px 0px;
`

export const Div_back = styled.div`
    display: flex; 
    border-bottom: 1px solid #F1F1F1;
    padding-bottom: 0.5rem;
`

export const H2_back = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: #1B4B66;
    margin-left: 1rem;
`

export const Img_pointer = styled.img`
    cursor: pointer;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        font-weight: 500;
        font-size: 1rem;
        color: #626262;
        float: left;
        margin-top: -1rem;
        margin-left: 2rem;
    }

    input {
        width: 10%;
        margin-top: 1rem;
    }

`