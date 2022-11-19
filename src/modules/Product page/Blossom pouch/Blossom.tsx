import React from 'react'
import ReactDOM from 'react-dom/client'
import ContentProduct from './content'
import GlobalStyle from '../../../assets/Styles/globalStyled'

ReactDOM.createRoot(document.getElementById('Coach_content') as HTMLElement).render(
  <React.StrictMode>
    <ContentProduct />
    <GlobalStyle />
  </React.StrictMode>
)
