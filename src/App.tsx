import { useState } from 'react'
import Header from './components/header'
import Banner from './components/home page/banner'
import Handpicked from './components/home page/collections'
import ShopBrands from './components/home page/shop'
import Footer from './components/footer'
import NewArrivals from './components/home page/new arrivals'
function App() {
  
  return (
    <div className="App">
     <Header />
     <Banner />
     <NewArrivals />
     <Handpicked />
     <ShopBrands />
     < Footer />
    </div>
  )
}

export default App
