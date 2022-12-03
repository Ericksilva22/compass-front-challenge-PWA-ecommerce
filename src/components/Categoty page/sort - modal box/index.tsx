import Img_back from '../../../assets/Images/Home Page/leading-icon.svg'


import { Fade, Modal_container, Div_back, H2_back, Img_pointer, Form } from './sort-modal'


function SortModal() {

   function closeModal(){
      const modal = document.querySelector<HTMLElement>('#modal_container-sort')!;
      const fade = document.querySelector<HTMLElement>('#fade-sort')!;
      modal.style.display = "none";
      fade.style.display = "none";
   }

    return (
         <section>
            <Fade id='fade-sort'></Fade>
            <Modal_container id='modal_container-sort'>
              <Div_back>
               <Img_pointer onClick={closeModal} src={Img_back } alt="" />
               <H2_back>Sort by</H2_back>
              </Div_back>

              <Form>
                <input type="radio" name="form-sort" id="popular" />
                <label htmlFor="popular">Popular Products</label>

                <input type="radio" name="form-sort" id="relevance" />
                <label htmlFor="relevance">Relevance</label>

                <input type="radio" name="form-sort" id="whats" />
                <label htmlFor="whats">What's New</label>

                <input type="radio" name="form-sort" id="price-low" />
                <label htmlFor="price-low">Price - Low to High</label>

                <input type="radio" name="form-sort" id="price-high" />
                <label htmlFor="price-high">Price - high to low</label>

                <input type="radio" name="form-sort" id="onsale" />
                <label htmlFor="onsale">On Sale</label>
              </Form>

            </Modal_container>
         </section>
     
    )
  }
  
  export default SortModal