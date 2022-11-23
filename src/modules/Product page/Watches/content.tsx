import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ProductDescription from '../../../components/Product page/Product description'
import MainBlossom from '../../../components/Product page/main blossom'
import Modal from '../../../components/modal box'
import MainWatches from '../../../components/Product page/main watches'

function ContentProduct() {
  
    return (
      <div>
       <Header />
       <Modal />
       <MainWatches />
       <ProductDescription />
       <Footer />
      </div>
    )
  }
  
  export default ContentProduct