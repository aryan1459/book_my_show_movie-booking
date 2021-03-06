import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import MovieProvider from "./context/Movie.context";

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
            <MovieProvider>
                <App />
            </MovieProvider>
        </BrowserRouter>                        
</React.StrictMode>,
  document.getElementById('root')
);
//it just sure that inside app components we can make routes
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
