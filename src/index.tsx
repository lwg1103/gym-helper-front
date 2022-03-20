import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Store from './store/Store'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}> 
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
