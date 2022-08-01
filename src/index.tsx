import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<App />} />
        <Route path="/search/:searchQuery" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
