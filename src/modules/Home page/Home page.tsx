import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Content'
import GlobalStyle from '../../assets/Styles/globalStyled'


ReactDOM.createRoot(document.getElementById('home') as HTMLElement).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
)
