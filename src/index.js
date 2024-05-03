import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import WhoAreWe from './js/WhoAreWe';
import Menu from './js/Menu';
import MainPage from './js/MainPage';
import WorkWithUs from './js/WorkWithUs';
import reportWebVitals from './reportWebVitals';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/WhoAreWe" element={<WhoAreWe />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/WorkWithUs" element={<WorkWithUs/>} />
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
