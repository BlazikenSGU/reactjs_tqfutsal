import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import {store} from './redux/store'
import {Provider} from 'react-redux'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import Layout from './Components/Layout.jsx'

import './sass/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Layout/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
