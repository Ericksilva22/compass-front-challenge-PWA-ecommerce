import styled from 'styled-components'

export const Div_subtitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonLogout_subtitles = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width:8.5rem;
    height: 2.5rem;
    border-radius: 8px;
    border: 2px solid #1B4B66;
    margin-right: 1rem;
    a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        color: #1B4B66;
    }
`

export const Div_content = styled.div`
    display:flex;

`

export const Main = styled.main`
    margin-left: 1rem;
    margin-bottom: 8rem;
    width: 75%;
    border-radius: 8px;
    padding-right: 1rem;
`

export const H2 = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-left: 1rem;
    border-bottom: 1px solid #E5E5E5;
`

export const Div_names = styled.div`
    display: flex;
`

export const Input_names = styled.input`
    background-color:#F1F1F1;
    border-radius: 4px;
    width: 17.938rem;
    height: 3.25rem;
    padding: 1rem;
    margin-left: 1rem;
    border: none;

    &::-webkit-input-placeholder{ /* Chrome/opera/Safari */
        font-weight: 500;
        font-size: 1rem;
        color:#626262; 
    }

    &::-moz-placeholder{ /* Firefox 19+ */
        font-weight: 500;
        font-size: 1rem;
        color:#626262;
    }
`

export const Label = styled.label`
    font-weight: 500;
    font-size: 1rem;
    display: block;
    margin: 0.5rem 0 1rem 1rem
`

export const Input_email = styled(Input_names)`
    width: 37rem;
`

export const Input_DDD = styled(Input_names)`
    width: 5rem;
`

export const Input_number = styled(Input_names)`
    width: 19rem;
`
export const Input_password = styled(Input_names)`
    width: 17.938rem;
`

export const Eye_icon = styled.img`
    position: relative;
    left: -3rem;
    top: 0.4rem;
`

export const H3 = styled(H2)`
    margin-top: 2rem;
    margin-bottom: 3rem;
`