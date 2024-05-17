import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import WhoAreWe from './js/WhoAreWe';
import Contact from './js/contact';
import Companies from './js/Companies';
import MainPage from './js/MainPage';
import WorkWithUs from './js/WorkWithUs';
import reportWebVitals from './reportWebVitals';
import WhatWeDid from './js/WhatWeDid';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/WhoAreWe" element={<WhoAreWe />} />
      <Route path="/WhatWeDid" element={<WhatWeDid />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/WorkWithUs" element={<WorkWithUs/>} />
      <Route path="/Companies" element={<Companies/>} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
