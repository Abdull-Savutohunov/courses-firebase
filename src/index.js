  import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css'
import {BrowserRouter} from "react-router-dom";
import {AuthProviders} from "./provider/AuthProviders/AuthProviders";
import {FilterProviders} from "./provider/FilterProviders";
import '../node_modules/font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilterProviders>
    <AuthProviders>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthProviders>
  </FilterProviders>
);
