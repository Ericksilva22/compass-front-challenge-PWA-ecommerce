import Header from '../../components/header'
import Banner from '../../components/home page/banner'
import Handpicked from '../../components/home page/collections'
import ShopBrands from '../../components/home page/shop'
import Footer from '../../components/footer'
import NewArrivals from '../../components/home page/new arrivals'
import Modal from '../../components/modal box'
import Categories from '../../components/home page/top categories'
import AppBar from '../../components/app - bar'
import Menu_mobile from '../../components/home page/menu-mobile'

function Home() {
  
  return (
    <div className="App">
      <Header />
      <Modal />
      <Menu_mobile />
      <Banner />
      <Categories />
      <NewArrivals />
      <Handpicked />
      <ShopBrands />
      <Footer />
      <AppBar />
    </div>
  )
}

export default Home
