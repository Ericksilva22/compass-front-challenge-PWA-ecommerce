import Header from '../../../components/Product page/header'
import Footer from '../../../components/Product page/footer'
import ProductDescription from '../../../components/Product page/Product description'
import MainBrownBag from '../../../components/Product page/main brownbag'
import AppBar from '../../../components/app - bar'
import Modal from '../../../components/Product page/main brownbag/modal box'

function ContentProduct() {
  
    return (
      <div>
       <Header />
       <MainBrownBag />
       <ProductDescription />
       <Footer />
       <AppBar />
       <Modal />
      </div>
    )
  }
  
  export default ContentProduct