import styled from 'styled-components'

export const Color_primary = styled.section`
    background-color:#1B4B66;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    h1 {
        font-size: 1.5rem;
        font-weight:600;
        font-family: "Inter", sans-serif;
    }
    
`

export const Color_Primary_Tint = styled(Color_primary)`
    background-color:#639599;
`

export const Color_Error = styled(Color_primary)`
    background-color:#B00020;
`

export const Color_Highlight = styled(Color_primary)`
    background-color:#FF8C4B;
`

export const Color_Dark = styled(Color_primary)`
    background-color:#13101E;
`

export const Color_Light_Text = styled(Color_primary)`
    background-color:#B6B6B6;
`

export const Color_Accent = styled(Color_primary)`
    background-color:#F4F4F4;
`

export const Color_Grey = styled(Color_primary)`
    background-color:#F1F1F1;
`