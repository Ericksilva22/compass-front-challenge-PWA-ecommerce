import arrow_nav from '../../../../assets/Images/Product Page/chevron-right-small.svg'
import Img_banner from '../../../../assets/Images/Category page/hero.png'
import Icon_plus from '../../../../assets/Images/Category page/plus.svg'
import Icon_less from '../../../../assets/Images/Category page/less.svg'
import Img_Blossom from '../../../../assets/Images/Category page/image-grande.svg'
import Img_BrownBag from '../../../../assets/Images/Category page/image-remus.png'
import Img_Coach from '../../../../assets/Images/Category page/image-coach.png'
import Img_BlackBag from '../../../../assets/Images/Category page/image-boujee.png'
import Img_like from '../../../../assets/Images/Category page/wishlist.svg'
import Img_star from '../../../../assets/Images/Category page/star.svg'
import Img_grid from '../../../../assets/Images/Category page/grid.svg'
import Img_sort from '../../../../assets/Images/Category page/sort.svg'


import { Main, Figure_banner, Content_banner, Div_options, Div_options_Title, Div_options_TitleGray, 
   H1_main, Section_content, Side_menu, Div_side, Title_side, Less_side, Label_Side, Section_options,
   ArrivalsItens, DivArrivalsItens, ArrivalsItensName, ArrivalsItensh4, ArrivalsItensP,Div_prices,   
   ArrivalsItensPrice, Section_cards, Card_img, Rating, P_Rating, P_priceOriginal, P_priceOFF, Img_options,
   P_show_items, P_sort, Span_show, Select_show, Option_show, Section_selectPage, Link_selectPage,
   Div_pages, Div_next, Link_selectPage_actived, Link_next, DivArrivalsItensTwo} from './mainHandbags'

function MainHandbags() {
    return (
      <Main>
         <Figure_banner>
            <Content_banner src={Img_banner} alt="70% OFF BLACK FRIDAY" />
         </Figure_banner>
         <Div_options>
            <Div_options_Title href="../../../../../index.html">Home</Div_options_Title>
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
            <Section_cards>
               <Section_options>
                  <img src={Img_grid} alt="Grid Icon" />
                  <Img_options src={Img_sort} alt="Grid Icon" />
                  <P_show_items>Showing 1 - 40 of 145 items</P_show_items>
                  <P_sort>To Show: <Span_show>9</Span_show></P_sort>
                  <P_sort>Sort By</P_sort>
                  <Select_show id="filter">
                     <Option_show defaultChecked value="position">Position</Option_show>
                     <Option_show value="price">Price</Option_show>
                  </Select_show>
               </Section_options>
               <DivArrivalsItens className='Itens_one'>
                  <ArrivalsItens>
                     <a href="../Product pages/Blossom.html">
                        <img src={Img_Blossom} alt="Blossom Pouch" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Grande</ArrivalsItensh4 >
                         <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Blossom Pouch</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$39.49</ArrivalsItensPrice>
                        <P_priceOriginal>$78.98</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                  </ArrivalsItens>

                  <ArrivalsItens>
                     <a href="../Product pages/Coach.html">
                        <Card_img src={Img_Coach} alt="Leather Coach Bag" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Coach</ArrivalsItensh4 >
                        <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Leather Coach Bag</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$54.69</ArrivalsItensPrice>
                        <P_priceOriginal>$109.38</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                  </ArrivalsItens>

                  <ArrivalsItens>
                     <a href="../Product pages/BrownBag.html">
                        <Card_img src={Img_BrownBag} alt="Brown bag" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Remus</ArrivalsItensh4 >
                        <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Brown Strap Bag</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <ArrivalsItensPrice>$57.00</ArrivalsItensPrice>
                  </ArrivalsItens>
               </DivArrivalsItens>

               <DivArrivalsItens className='Itens_one'>
                  <ArrivalsItens>
                     <a href="../Product pages/Blossom.html">
                        <Card_img src={Img_BlackBag} alt="Blossom Pouch" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Boujee</ArrivalsItensh4 >
                         <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Black Bag</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$56.49</ArrivalsItensPrice>
                        <P_priceOriginal>$112.98</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                  </ArrivalsItens>

                  <ArrivalsItens>
                     <a href="../Product pages/Coach.html">
                        <Card_img src={Img_Coach} alt="Leather Coach Bag" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Coach</ArrivalsItensh4 >
                        <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Leather Coach Bag</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$54.69</ArrivalsItensPrice>
                        <P_priceOriginal>$109.38</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                  </ArrivalsItens>

                  <ArrivalsItens>
                     <a href="../Product pages/BrownBag.html">
                        <Card_img src={Img_BrownBag} alt="Brown bag" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Remus</ArrivalsItensh4 >
                        <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Brown Strap Bag</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$57.00</ArrivalsItensPrice>
                        <P_priceOriginal>$78.66</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                  </ArrivalsItens>
               </DivArrivalsItens>

               <DivArrivalsItens className='Itens_one'>
                  <ArrivalsItens>
                     <a href="../Product pages/Blossom.html">
                        <img src={Img_Blossom} alt="Blossom Pouch" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Grande</ArrivalsItensh4 >
                         <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Blossom Pouch</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$39.49</ArrivalsItensPrice>
                        <P_priceOriginal>$78.98</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                     
                  </ArrivalsItens>

                  <ArrivalsItens>
                     <a href="../Product pages/Coach.html">
                        <Card_img src={Img_Coach} alt="Leather Coach Bag" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Coach</ArrivalsItensh4 >
                        <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Leather Coach Bag</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$54.69</ArrivalsItensPrice>
                        <P_priceOriginal>$109.38</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                     
                  </ArrivalsItens>

                  <ArrivalsItens>
                     <a href="../Product pages/BrownBag.html">
                        <Card_img src={Img_BrownBag} alt="Brown bag" />
                     </a>
                     <ArrivalsItensName>
                        <ArrivalsItensh4 >Remus</ArrivalsItensh4 >
                        <img src={Img_like} alt="Like icon" />
                     </ArrivalsItensName>
                     <ArrivalsItensP>Brown Strap Bag</ArrivalsItensP>
                     <Rating>
                        <img src={Img_star}  alt="Stars icon" />
                        <P_Rating >43 ratings</P_Rating >
                     </Rating>
                     <Div_prices >
                        <ArrivalsItensPrice>$57.00</ArrivalsItensPrice>
                        <P_priceOriginal>$78.66</P_priceOriginal>
                        <P_priceOFF>50%OFF</P_priceOFF>
                     </Div_prices >
                  </ArrivalsItens>
               </DivArrivalsItens>
            </Section_cards>
         
         </Section_content>
         <Section_selectPage>
            <Div_pages>
               <Link_selectPage href='./handbagsPage1.html'>1</Link_selectPage>
               <Link_selectPage href='./handbagsPage2.html'>2</Link_selectPage>
               <Link_selectPage_actived href='#'>3</Link_selectPage_actived>
               <Link_selectPage href='./handbagsPage4.html'>4</Link_selectPage>
               <Link_selectPage href='./handbagsPage5.html'>5</Link_selectPage>
            </Div_pages> 
            <Div_next>
               <Link_next href='./handbagsPage4.html'>Next</Link_next>
            </Div_next>

         </Section_selectPage>
      </Main>
    )
  }
  
  export default MainHandbags