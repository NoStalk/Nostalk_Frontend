import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import { store } from './store';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
