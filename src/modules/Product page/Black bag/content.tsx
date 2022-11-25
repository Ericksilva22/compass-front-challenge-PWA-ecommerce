import Header from '../../../components/Product page/header'
import Footer from '../../../components/Product page/footer'
import ProductDescription from '../../../components/Product page/Product description'
import MainBlackBag from '../../../components/Product page/main blackbag'
import AppBar from '../../../components/app - bar'
import Modal from '../../../components/Product page/main blackbag/modal box'
function ContentProduct() {
  
    return (
      <div>
       <Header />
       <MainBlackBag />
       <ProductDescription />
       <Footer />
       <AppBar />
       <Modal />
      </div>
    )
  }
  
  export default ContentProduct