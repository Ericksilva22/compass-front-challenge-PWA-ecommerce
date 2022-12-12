import Img_arrivals1 from '../../../assets/Images/Home Page/arrivals1.svg'
import Img_arrivals2  from '../../../assets/Images/Home Page/arrivals2.png'
import Img_arrivals3  from '../../../assets/Images/Home Page/arrivals3.png'
import Img_arrivals4  from '../../../assets/Images/Home Page/arrivals4.png'
import Img_arrow  from '../../../assets/Images/Home Page/arrivals_arrow.svg'
import Img_like  from '../../../assets/Images/Home Page/like_icon.svg'
import Img_fill  from '../../../assets/Images/Home Page/Vector-like.svg'
import {motion} from 'framer-motion'


import { SectionArrivals, ArrivalsTitle, DivTitle, Arrivalsh3, DivArrivals, DivArrivalsItens, ArrivalsItens, ArrivalsItensName, Icon_like, Icon_fill,  ArrivalsItensh4, ArrivalsItensP, ArrivalsItensPrice, Img_width  } from './arrivals'

function NewArrivals() {

    const icon_like = document.querySelectorAll<HTMLElement>(".like-icon")!;
    const icon_fill = document.querySelectorAll<HTMLElement>(".like-fill")!;

    for( let i = 0; i < icon_like.length; i++){

        icon_like[i].addEventListener("click", function():void{
      
            icon_like[i].style.display = "none";
            icon_fill[i].style.display = "block";
        
        })

        icon_fill[i].addEventListener("click", function():void{
      
            icon_like[i].style.display = "block";
            icon_fill[i].style.display = "none";
        
        })

    }

   return (
      <SectionArrivals>
         <DivArrivals>
            <ArrivalsTitle>New Arrivals</ArrivalsTitle>
            <DivTitle>
               <a href="./page404.html">
                  <Arrivalsh3>View All</Arrivalsh3>
               </a>
               <img src={Img_arrow} alt="Arrow icon" />
            </DivTitle>
         </DivArrivals>
         <motion.div drag="x" dragConstraints={{right: 0, left: -300}}>
            <DivArrivalsItens>
               <ArrivalsItens> 
                  <a href="./Product pages/Blossom.html">
                  <Img_width src={Img_arrivals1} alt="Blossom Pouch" />
                  </a>
                  <ArrivalsItensName>
                     <ArrivalsItensh4 >Grande</ArrivalsItensh4 >
                     <Icon_like onClick={NewArrivals} className='like-icon' src={Img_like} alt="Like icon" />
                     <Icon_fill className='like-fill' src={Img_fill} alt="Like icon" />
                  </ArrivalsItensName>
                  <ArrivalsItensP>Blossom Pouch</ArrivalsItensP>
                  <ArrivalsItensPrice>$39.49</ArrivalsItensPrice>
               </ArrivalsItens>

               <ArrivalsItens>
                  <a href="./Product pages/Coach.html">
                     <Img_width src={Img_arrivals2} alt="Leather Coach Bag" />
                  </a>
                  <ArrivalsItensName>
                     <ArrivalsItensh4 >Coach</ArrivalsItensh4 >
                     <Icon_like src={Img_like} onClick={NewArrivals} className='like-icon' alt="Like icon" />
                     <Icon_fill className='like-fill' src={Img_fill} alt="Like icon" />
                  </ArrivalsItensName>
                  <ArrivalsItensP>Leather Coach Bag</ArrivalsItensP>
                  <ArrivalsItensPrice>$54.69</ArrivalsItensPrice>
               </ArrivalsItens>

               <ArrivalsItens>
                  <a href="./Product pages/BrownBag.html">
                     <Img_width src={Img_arrivals3} alt="Brown bag" />
                  </a>
                  <ArrivalsItensName>
                     <ArrivalsItensh4 >Remus</ArrivalsItensh4 >
                     <Icon_like src={Img_like} onClick={NewArrivals} className='like-icon' alt="Like icon" />
                     <Icon_fill className='like-fill' src={Img_fill} alt="Like icon" />
                  </ArrivalsItensName>
                  <ArrivalsItensP>Brown Strap Bag</ArrivalsItensP>
                  <ArrivalsItensPrice>$57.00</ArrivalsItensPrice>
               </ArrivalsItens>

               <ArrivalsItens>
                  <a href="./Product pages/BlackBag.html">
                     <Img_width src={Img_arrivals4} alt="Black Bag" />
                  </a>
                  <ArrivalsItensName>
                     <ArrivalsItensh4 >Boujee</ArrivalsItensh4 >
                     <Icon_like src={Img_like} onClick={NewArrivals} className='like-icon' alt="Like icon" />
                     <Icon_fill className='like-fill' src={Img_fill} alt="Like icon" />
                  </ArrivalsItensName>
                  <ArrivalsItensP>Black BAG</ArrivalsItensP>
                  <ArrivalsItensPrice>$56.49</ArrivalsItensPrice>
               </ArrivalsItens>

               <ArrivalsItens>
                  <a href="./Product pages/BlackBag.html">
                     <Img_width src={Img_arrivals4} alt="Black Bag" />
                  </a>
                  <ArrivalsItensName>
                     <ArrivalsItensh4 >Boujee</ArrivalsItensh4 >
                     <Icon_like src={Img_like} onClick={NewArrivals} className='like-icon' alt="Like icon" />
                     <Icon_fill className='like-fill' src={Img_fill} alt="Like icon" />
                  </ArrivalsItensName>
                  <ArrivalsItensP>Black BAG</ArrivalsItensP>
                  <ArrivalsItensPrice>$56.49</ArrivalsItensPrice>
               </ArrivalsItens>

               <ArrivalsItens>
                  <a href="./Product pages/BlackBag.html">
                     <Img_width src={Img_arrivals4} alt="Black Bag" />
                  </a>
                  <ArrivalsItensName>
                     <ArrivalsItensh4 >Boujee</ArrivalsItensh4 >
                     <Icon_like src={Img_like} onClick={NewArrivals} className='like-icon' alt="Like icon" />
                     <Icon_fill className='like-fill' src={Img_fill} alt="Like icon" />
                  </ArrivalsItensName>
                  <ArrivalsItensP>Black BAG</ArrivalsItensP>
                  <ArrivalsItensPrice>$56.49</ArrivalsItensPrice>
               </ArrivalsItens>

            </DivArrivalsItens>
         </motion.div>
      </SectionArrivals>
   )
}

export default NewArrivals