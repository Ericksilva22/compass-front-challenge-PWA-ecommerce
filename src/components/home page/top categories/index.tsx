import Img_categories from '../../../assets/Images/Home Page/Category.png'



import { Sectioncategories, H1_categories, Img_categoreis  } from './categories'

function Categories() {
   return (
      <Sectioncategories>
         <H1_categories>Top categories</H1_categories>
         <a href="./Category pages/handbags/handbagsPage1.html">
            <Img_categoreis src={Img_categories} alt="" />
         </a>
         
      </Sectioncategories>
   )
}

export default Categories