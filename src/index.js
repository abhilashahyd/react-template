import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './hyper-template.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import _history from './utils/history';
import store from './store';
import { Provider } from "react-redux";
import 'react-pro-sidebar/dist/css/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter history={_history}>
      <App />
    </BrowserRouter>
    </Provider>

  </React.StrictMode>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
