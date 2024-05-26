import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Page/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import './i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
