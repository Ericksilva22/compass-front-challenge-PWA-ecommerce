import styled from 'styled-components'

export const SectionHand = styled.section`
    color: #13101E;
    margin-top: 1rem;
    overflow-x: hidden;

    @media (max-width: 375px) {
        width: 113%;
    }

    @media (max-width: 320px) {
        width: 133%;
    }
`

export const Shoph1 = styled.h1`
   font-size: 2.125rem;
   font-weight: 600;
   padding: 2rem 2rem;

   @media (max-width: 425px) {
        font-weight: 600;
        font-size: 1rem;
    }
`

export const DivBrands = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 4rem;

    @media (max-width:425px) {
        flex-wrap: wrap;
        margin-left: 1rem;
    }  

`

export const FigureShotcurt = styled.figure`
    display: none;

    @media (max-width: 425px) {
        width:110%;
        display: block;
        margin-bottom: 4rem;
    }
`

export const ImgShotcurt = styled.img`
    width:95%;
    @media (max-width: 425px) {
        margin-top: -3rem;
        padding-left: 1rem;
        padding-right: 2rem;
    }
`

export const FigureShop = styled.figure`
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: 425px) {
        width:110%;
    }
`

export const ImgLifestyle = styled.img`
    width:95%;
    @media (max-width: 425px) {
        margin-top: -1rem;
        padding-left: 1rem;
        padding-right: 2rem;
    }
`

export const DivSkin_Face = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Div_skin = styled.div`
   
`

export const Shoph2 = styled.h2`
   display:none;

   @media (max-width: 425px) {
        display:block;
        font-weight: 600;
        font-size: 1rem;
        margin-top:-3rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
    }
`

export const Shoph3 = styled.h3`
   display:none;

   @media (max-width: 425px) {
        display:block;
        font-weight: 600;
        font-size: 1rem;
        margin-top: -6rem;
        margin-bottom: 7rem;
        margin-left: 1rem;
    }
`

export const Skin_p = styled.p`
   font-weight: 700;
   font-size: 2.5rem;
   color: #A53F64;
   text-align: right;
   position: relative;
   top: -12rem;
   right: 2rem;

   @media (max-width:425px) {
        font-weight: 800;
        font-size: 0.7rem;
        top: -6rem;
        right: 2rem;
    }  
`

export const Face_p = styled.p`
   font-weight: 700;
   font-size: 2.5rem;
   color: #1B4B66;
   text-align: right;
   position: relative;
   top: -12rem;
   right: 2rem;

   @media (max-width:425px) {
        font-weight: 800;
        font-size: 0.7rem;
        top: -6rem;
        right: 2rem;
    }  
`

export const Skin_img = styled.img`
   border-radius: 16px;
   @media (max-width:425px) {
        Width:156px;
        Height:100px;
    }  
`

export const Skin_Arrow1 = styled.img`
  position: relative;
  top: -11rem;
  left: 32rem;

  @media (max-width:425px) {
        top: -5rem;
        left: 7rem;
        width: 20%;
    }  

`

export const Div_flex = styled.div`
    @media (max-width:425px) {
        flex-grow: 1;
        width: 33%;
    }  
`

export const Img_flex = styled.img`

    @media (max-width:425px) {
        width:88%;
        margin-bottom:1rem;
    }  

    @media (max-width:375px) {
        width:90%;
    }  
`
export const Div_faceapp = styled.div`
    margin-top: -1rem;
    margin-bottom: 4rem;
`

export const Img_shotcut = styled.img`
    display: none;
    @media (max-width:425px) {
        display: block;
        width:88%;
        margin-top: -6rem;
        margin-bottom:7rem;
        border-radius: 12px;
        margin-left: 1rem;
    }  

`

export const Carousel = styled.div`
    display: flex;
    justify-content: space-around;
    width: 250%;
    

    img {
        width: 120%;
        margin-left: -5rem;
    }

`