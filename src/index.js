import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom"
import Store from "./Store"
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Store>
       <Router>
          <App />
        </Router>
       </Store>
  </React.StrictMode>
);