import styled from 'styled-components'

export const Section_appBar = styled.section`
    display: none;

    @media (max-width: 425px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0rem;
        background-color: #FFFFFF;
        width: 100%;
    }
    
    @media (max-width: 375px) {
      
        width: 96%;
        
    }

    @media (max-width: 320px) {
        width: 91%;
    }
`