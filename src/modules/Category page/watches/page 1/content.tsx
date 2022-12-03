import Header from '../../../../components/header'
import Footer from '../../../../components/Categoty page/footer'
import MainWatches from '../../../../components/Categoty page/watches/page 1'
import Modal from '../../../../components/modal box'
import SortModal from '../../../../components/Categoty page/sort - modal box'

function ContentCategory() {
  
    return (
      <div>
       <Header />
       <Modal />
       <MainWatches />
       <Footer />
       <SortModal />
      </div>
    )
  }
  
  export default ContentCategory