import Header from '../../../../components/Categoty page/header'
import Footer from '../../../../components/Categoty page/footer'
import MainHandbags from '../../../../components/Categoty page/handbags/page 4'
import AppBar from '../../../../components/app - bar'
import Modal from '../../../../components/modal box'
import SortModal from '../../../../components/Categoty page/sort - modal box'
function ContentCategory() {
  
    return (
      <div>
       <Header />
       <Modal />
       <MainHandbags />
       <Footer />
       <AppBar />
       <SortModal />
      </div>
    )
  }
  
  export default ContentCategory