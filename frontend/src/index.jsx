import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Asd123 from './Asd123';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/asd123" element={<Asd123 />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

