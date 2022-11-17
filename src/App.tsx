import { useState } from 'react'
import Header from './components/header'
import Banner from './components/home page/banner'
import Handpicked from './components/home page/collections'
import ShopBrands from './components/home page/shop'
import Footer from './components/footer'
function App() {
  
  return (
    <div className="App">
     <Header />
     <Banner />
     <Handpicked />
     <ShopBrands />
     < Footer />
    </div>
  )
}

export default App
