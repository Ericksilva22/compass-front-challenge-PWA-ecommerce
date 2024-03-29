import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './assets/Styles/globalStyled'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
)
