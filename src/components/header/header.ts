import styled from 'styled-components'

export const Headerhome = styled.div`
    display: flex;
    align-items: center;
    margin: 2% 1% 0 1%;
`
export const HeaderNav = styled.nav`
    width: 40%;
    margin-right: 15rem;
    margin-left: 1rem;
`

export const Headerform = styled.form`
    display: flex;
    align-items: center;
`

export const Headericons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10%;
`

export const Headerinput = styled.input`

    width: 22.625rem;
    height: 2.5rem;
    margin-right: 0.5rem;
    padding-left: 2.5rem;
    background-color: #F1F1F1;
    outline: 0;
    border: none;
    border-radius: 4px;

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

export const Li = styled.li`
    list-style: none;
    color:  #171520;
    font-weight: 500;
    font-size: 0.875rem;
` 

export const UlNav = styled.ul`
    display: flex;
    justify-content: space-around;
`
export const SearchIcon = styled.img`
    position: relative;
    right: 22.5rem;
`

export const LinksLi = styled.a`
    text-decoration: none;
    color:  #171520;
`

export const ImgLabel = styled.img`
    position: relative;
    right: 1rem;
    display: none;
`

export const Img_icon = styled.img`
    cursor: pointer;
`

/*
export const LiSass = styled<any>(Li)`
font-size: ${(props)=> props.size};
`
*/