import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './content'
import GlobalStyle from '../../assets/Styles/globalStyled'
import AppBar from '../../components/Profile page/app - bar'


ReactDOM.createRoot(document.getElementById('categories_content') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Content />
    <AppBar /> 

  </React.StrictMode>
)
