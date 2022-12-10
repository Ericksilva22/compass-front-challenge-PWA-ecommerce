import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Content'
import GlobalStyle from '../../assets/Styles/globalStyled'


ReactDOM.createRoot(document.getElementById('about') as HTMLElement).render(
  <React.StrictMode>
    <About />
    <GlobalStyle />
  </React.StrictMode>
)
