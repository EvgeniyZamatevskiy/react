import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'App'
import 'styles/index.scss'
import { Testing } from 'testing/Testing'
import { store } from 'reduxToolkit'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Testing />
    </BrowserRouter>
  </Provider>
)

reportWebVitals()
