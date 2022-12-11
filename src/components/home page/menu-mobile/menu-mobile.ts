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
    left: 40%;
    top: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    width: 24rem;
    height: 33.125rem;
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
    margin-left: 1rem;

    @media (max-width:375px) {
        height: 38.125rem;
    }

    @media (max-width:320px) {
        height: 45.125rem;
    }
`

export const Section_profile = styled.section`
    display: flex;
    width: 16.563rem;
    height: 4rem;
    border-radius: 8px;
    background-color:#F4F4F4;
    align-items: center;
    margin-bottom: 0.4rem;

    h1 {
        font-weight: 500;
        font-size: 1rem;
        margin-right: 3rem;
    }

`

export const Image_close= styled.img`
    width: 3%;
    margin-left: 20rem;
`

export const Image_profile = styled.img`
    border-radius: 999999px;
    width: 20%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`

export const H2 = styled.h2`
    font-weight: 500;
    font-size: 0.875rem;
    color: #626262;
    margin-bottom: 1rem;
`

export const Ul = styled.ul`
    width: 95%;
    margin-bottom: 1rem;

    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.8rem;
    }

    a {
        font-weight: 600;
        font-size: 0.875rem;
        text-decoration: none;
        color: #171520;
    }
`

