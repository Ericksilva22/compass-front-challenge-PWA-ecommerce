import img_about_banner from '../../assets/Images/About/banner-image.png'
import img_about_banner2 from '../../assets/Images/About/Rectangle 531.png'
import img_about_banner3 from '../../assets/Images/About/Rectangle 532.png'
import img_about_banner4 from '../../assets/Images/About/Rectangle 533.png'


import {Main, Figure_banner, Section_Center, Section_row, Section_row_reverse } from './about'


function AboutMain() {

   return (
      <Main>
         <Figure_banner>
            <img src={img_about_banner} alt="" />
         </Figure_banner>
         <Section_Center>
            <h2>About</h2>
            <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
         </Section_Center>
         <Section_row>
            <div>
               <h2>About</h2>
               <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
            </div>
            <img src={img_about_banner2} alt="" />
         </Section_row>

         <Section_row_reverse>
            <div>
               <h2>About</h2>
               <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
            </div>
            <img src={img_about_banner3} alt="" />
         </Section_row_reverse >

         <Section_row>
            <div>
               <h2>About</h2>
               <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
            </div>
            <img src={img_about_banner4} alt="" />
         </Section_row>
      </Main>  
   )
}
  
export default AboutMain