import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './content'
import GlobalStyle from '../../../assets/Styles/globalStyled'


ReactDOM.createRoot(document.getElementById('reviews_content') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Content />
  </React.StrictMode>
)
