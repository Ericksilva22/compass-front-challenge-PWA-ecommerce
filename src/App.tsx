import { useState } from 'react'
import Header from './components/header'
import Banner from './components/home page/banner'
import Handpicked from './components/home page/collections'
function App() {
  
  return (
    <div className="App">
     <Header />
     <Banner />
     <Handpicked />
    </div>
  )
}

export default App
