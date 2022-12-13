import Header from '../../../components/Profile page/header'
import Footer from '../../../components/Profile page/footer'
import MainProfileOrders from '../../../components/Profile page/My Orders'
import AppBar from '../../../components/Profile page/app - bar'


function Content() {
  
    return (
      <div>
        <Header />
        <MainProfileOrders />
        <Footer />
        <AppBar />
      </div>
    )
}
  
export default Content