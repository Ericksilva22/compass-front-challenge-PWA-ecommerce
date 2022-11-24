import Header from '../../../components/Product page/header'
import Footer from '../../../components/Product page/footer'
import ProductDescription from '../../../components/Product page/Product description'
import MainCoach from '../../../components/Product page/main coach'
import Modal from '../../../components/modal box'
import AppBar from '../../../components/app - bar'

function ContentProduct() {
  
    return (
      <div>
       <Header />
       <Modal />
       <MainCoach />
       <ProductDescription />
       <Footer />
       <AppBar />
      </div>
    )
  }
  
  export default ContentProduct