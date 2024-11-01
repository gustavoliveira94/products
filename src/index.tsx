import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import { Home } from './presentation/views/';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider, OrderProvider } from './core/providers';
import { Header } from './presentation/components';

import './configs/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider>
      <OrderProvider>
        <Header />
        <Home />
      </OrderProvider>
    </ApolloProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
