import styled from 'styled-components'

export const Divtitle = styled.div`
    background-color: #F0F0F0;
    color: #171520;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 2%;
    @media (max-width: 425px) {
        display:none;
    }
`

export const Bannerh1 = styled.h1`
   font-size: 0.875rem;
   font-weight: 400;
`

export const BannerFigure = styled.figure`
   width:98%;
   margin: 0 auto;
  
   @media (max-width: 425px) {
        margin-top: 2rem;
        width:94%;
    }

    @media (max-width: 375px) {
        width:105%;
        margin-left: 1rem;
    }

    @media (max-width: 320px) {
        margin-left: 0.8rem;
        width:120%;
    }
`

export const BannerImg = styled.img `
    width:100%;
    border-radius: 24px;
    cursor: grab;
    @media (max-width: 425px) {
        border-radius: 12px;
    }
`

export const BannerDivCarry = styled.div`
    width: 48.9%;
    height: 19.75rem;
    background: rgba(222, 222, 222, 0.7);
    backdrop-filter: blur(2.5px);
    border-radius: 24px 0px 0px 24px;
    color: #1B4B66;
    position: relative;
    top: -23rem;
    left: 42.3rem;
    cursor: grab;

    @media(max-width:425px){
        width: 52.5%;
        height: 6.8rem;
        border-radius: 8px 0px 0px 8px;
        top: -7.6rem;
        left: 11.8em;
        margin-bottom: 20rem;
    }

    @media(max-width:375px){
        width: 53.5%;
        height: 6rem;
        top: -6.9rem;
        left: 13.1rem;
        
    }

    @media(max-width:320px){
        width: 63.2%;
        height: 6rem;
        top: -6.9rem;
        left: 12.2rem;
    }
`

export const BannerDivCarryH1 = styled.h1`
   font-size: 3.75rem;
   font-weight: 800;
   margin-left: 4%;
   padding-top: 5%;

   @media(max-width:425px){
        font-size: 1.5rem;
        padding-right: 2rem;
    }

    @media(max-width:375px){
        font-size: 1.3rem;
    }
`
export const BannerDivCarryP = styled.p`
   font-size: 1.75rem;
   font-weight: 500;
   margin-left: 4%;
   padding-top: 2%;
   padding-right: 20%;

   @media(max-width:425px){
        font-size: 0.75rem;
        padding-right: 3rem;
    }

    @media(max-width:375px){
        font-size: 0.6rem;
    }
`

export const BannerButton = styled.button`
    background-color:#1B4B66;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    width: 180px;
    height: 44px;
    margin-left: 4%;
    margin-top: 3%;
    cursor: pointer;

    @media(max-width:425px){
        display:none;
    }
`

export const BannerSeeMore = styled.a `
    color: #FFFFFF;
    text-decoration: none;
    margin-left: 3%;
`
