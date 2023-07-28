import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProductContainer from './components/Product/ProductConatiner';
import './style/style.scss'
import ProductDetailPage from './components/Product/ProductDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductContainer />} />
        <Route path="/product/:name" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
