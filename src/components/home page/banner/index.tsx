import Img_banner from '../../../assets/Images/Home Page/image-bannet.png'
import Img_arrow from '../../../assets/Images/Home Page/arrow.svg'

import { Divtitle, Bannerh1, BannerFigure, BannerImg, BannerDivCarry, BannerDivCarryH1, BannerDivCarryP, BannerButton, BannerSeeMore } from './banner'

function Banner() {
   return (
      <section>
         <Divtitle>
            <Bannerh1>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status <a href="">here</a></Bannerh1>
         </Divtitle>
         <BannerFigure>
            <BannerImg src={Img_banner} alt="Banner" />
         </BannerFigure>
         <BannerDivCarry>
            <BannerDivCarryH1> Carry your Funk</BannerDivCarryH1>
            <BannerDivCarryP> Trendy handbags collection for your party animal</BannerDivCarryP>
            <BannerButton>
               <img src={Img_arrow} alt="" />
               <BannerSeeMore href="./src/assets/Pages/page404.html">See more</BannerSeeMore>
            </BannerButton>
         </BannerDivCarry>
      </section> 
   )
}

export default Banner