import Header from '../../../components/Product page/header'
import Footer from '../../../components/Product page/footer'
import ProductDescription from '../../../components/Product page/Product description'
import MainBlossom from '../../../components/Product page/main blossom'
import Modal from '../../../components/modal box'
import MainWatches from '../../../components/Product page/main watches'
import AppBar from '../../../components/app - bar'

function ContentProduct() {
  
    return (
      <div>
       <Header />
       <Modal />
       <MainWatches />
       <ProductDescription />
       <Footer />
       <AppBar />
      </div>
    )
  }
  
  export default ContentProduct