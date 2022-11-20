import arrow_nav from '../../../assets/Images/Product Page/chevron-right-small.svg'
import Img_banner from '../../../assets/Images/Category page/hero.png'
import Icon_plus from '../../../assets/Images/Category page/plus.svg'
import Icon_less from '../../../assets/Images/Category page/less.svg'


import { Main, Figure_banner, Content_banner, Div_options, Div_options_Title, Div_options_TitleGray, 
   H1_main, Section_content, Side_menu, Div_side, Title_side, Less_side, Label_Side} from './mainHandbags'

function MainHandbags() {
    return (
      <Main>
         <Figure_banner>
            <Content_banner src={Img_banner} alt="70% OFF BLACK FRIDAY" />
         </Figure_banner>
         <Div_options>
            <Div_options_Title href="../../../../index.html">Home</Div_options_Title>
            <img src={arrow_nav} alt="Arrow icon" />
            <Div_options_TitleGray>Handbag</Div_options_TitleGray>
         </Div_options>
         <H1_main>Handbags</H1_main>
         <Section_content>
            <Side_menu>
               <Div_side>
                  <Title_side>
                     Size
                  </Title_side>
                  <img src={Icon_plus} alt="Plus Icon" />
               </Div_side>

               <Div_side>
                  <Title_side>
                     Color
                  </Title_side>
                  <Less_side src={Icon_less} alt="Plus Icon" />
               </Div_side>
               <form>
                  <div>
                     <input type="checkbox" name="Blue" id="Blue" />
                     <Label_Side htmlFor="Blue">Blue</Label_Side>
                  </div>
                  
                  <div>
                     <input type="checkbox" name="Maroon Red" id="Maroon Red" />
                     <Label_Side htmlFor="Maroon Red">Maroon Red</Label_Side>
                  </div>
                  
                  <div>
                     <input type="checkbox" name="Crimson Red" id="Crimson Red" />
                     <Label_Side htmlFor="Crimson Red">Crimson Red</Label_Side>
                  </div>
                
                  <div>
                     <input type="checkbox" name="Seinna Pink" id="Seinna Pink" />
                     <Label_Side htmlFor="Seinna Pink">Seinna Pink</Label_Side>
                  </div>
                  
                  <div>
                     <input type="checkbox" name="Teal" id="Teal" />
                     <Label_Side htmlFor="Teal">Teal</Label_Side>
                  </div>
                 
                  <div>
                     <input type="checkbox" name="Aquamarine" id="Aquamarine" />
                     <Label_Side htmlFor="Aquamarine">Aquamarine</Label_Side>
                  </div>
                  
                  <div>
                     <input type="checkbox" name="Off-White" id="Off-White" />
                   <Label_Side htmlFor="Off-White">Off-White</Label_Side>
                  </div>
                  
                  <div>
                     <input type="checkbox" name="Muave Orange" id="Muave Orange" />
                     <Label_Side htmlFor="Muave Orange">Muave Orange</Label_Side>
                  </div>

               </form>

               <Div_side>
                  <Title_side>
                     Brand
                  </Title_side>
                  <img src={Icon_plus} alt="Plus Icon" />
               </Div_side>

               <Div_side>
                  <Title_side>
                     Prince Range
                  </Title_side>
                  <img src={Icon_plus} alt="Plus Icon" />
               </Div_side>

               <Div_side>
                  <Title_side>
                     Discount
                  </Title_side>
                  <img src={Icon_plus} alt="Plus Icon" />
               </Div_side>

               <Div_side>
                  <Title_side>
                     Availability
                  </Title_side>
                  <img src={Icon_plus} alt="Plus Icon" />
               </Div_side>
            </Side_menu>
         </Section_content>
      </Main>
    )
  }
  
  export default MainHandbags