import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'styles/index.scss'
import { App } from 'App'
import { Testing } from 'testing'
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
