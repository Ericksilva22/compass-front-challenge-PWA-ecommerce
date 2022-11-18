import Img_arrivals1 from '../../../assets/Images/Home Page/arrivals1.svg'
import Img_arrivals2  from '../../../assets/Images/Home Page/arrivals2.png'
import Img_arrivals3  from '../../../assets/Images/Home Page/arrivals3.png'
import Img_arrivals4  from '../../../assets/Images/Home Page/arrivals4.png'
import Img_arrow  from '../../../assets/Images/Home Page/arrivals_arrow.svg'
import Img_like  from '../../../assets/Images/Home Page/like_icon.svg'


import { SectionArrivals, ArrivalsTitle, DivTitle, Arrivalsh3, DivArrivals, DivArrivalsItens, ArrivalsItens, ArrivalsItensName, ArrivalsItensh4, ArrivalsItensP, ArrivalsItensPrice  } from './arrivals'

function NewArrivals() {
   return (
      <SectionArrivals>
         <DivArrivals>
            <ArrivalsTitle>New Arrivals</ArrivalsTitle>
            <DivTitle>
               <Arrivalsh3>View All</Arrivalsh3>
               <img src={Img_arrow} alt="Arrow icon" />
            </DivTitle>
         </DivArrivals>
         <DivArrivalsItens>
            <ArrivalsItens>
               <img src={Img_arrivals1} alt="Blossom Pouch" />
               <ArrivalsItensName>
                  <ArrivalsItensh4 >Grande</ArrivalsItensh4 >
                  <img src={Img_like} alt="Like icon" />
               </ArrivalsItensName>
               <ArrivalsItensP>Blossom Pouch</ArrivalsItensP>
               <ArrivalsItensPrice>$39.49</ArrivalsItensPrice>
            </ArrivalsItens>

            <ArrivalsItens>
               <img src={Img_arrivals2} alt="Blossom Pouch" />
               <ArrivalsItensName>
                  <ArrivalsItensh4 >Coach</ArrivalsItensh4 >
                  <img src={Img_like} alt="Like icon" />
               </ArrivalsItensName>
               <ArrivalsItensP>Leather Coach Bag</ArrivalsItensP>
               <ArrivalsItensPrice>$54.69</ArrivalsItensPrice>
            </ArrivalsItens>

            <ArrivalsItens>
               <img src={Img_arrivals3} alt="Blossom Pouch" />
               <ArrivalsItensName>
                  <ArrivalsItensh4 >Remus</ArrivalsItensh4 >
                  <img src={Img_like} alt="Like icon" />
               </ArrivalsItensName>
               <ArrivalsItensP>Brown Strap Bag</ArrivalsItensP>
               <ArrivalsItensPrice>$57.00</ArrivalsItensPrice>
            </ArrivalsItens>

            <ArrivalsItens>
               <img src={Img_arrivals4} alt="Blossom Pouch" />
               <ArrivalsItensName>
                  <ArrivalsItensh4 >Boujee</ArrivalsItensh4 >
                  <img src={Img_like} alt="Like icon" />
               </ArrivalsItensName>
               <ArrivalsItensP>Black BAG</ArrivalsItensP>
               <ArrivalsItensPrice>$56.49</ArrivalsItensPrice>
            </ArrivalsItens>

         </DivArrivalsItens>
      </SectionArrivals>
   )
}

export default NewArrivals