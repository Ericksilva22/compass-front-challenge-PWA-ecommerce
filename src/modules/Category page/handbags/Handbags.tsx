import React from 'react'
import ReactDOM from 'react-dom/client'
import ContentCategory from './content'
import GlobalStyle from '../../../assets/Styles/globalStyled'

ReactDOM.createRoot(document.getElementById('handbags_content') as HTMLElement).render(
  <React.StrictMode>
    <ContentCategory />
    <GlobalStyle />
  </React.StrictMode>
)
