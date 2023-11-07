import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import reportWebVitals from './reportWebVitals';
import ProfileDash from './components/ProfileDash';
import LoginPage from './components/LoginPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/Cart" element={<Cart />}/>
      <Route path='/ProfileDash' element={<ProfileDash />} />
      <Route path='/LoginPage' element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
);
reportWebVitals();
