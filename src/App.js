import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProductContainer from './components/Product/ProductConatiner';
import Navbar from './components/Navbar/Navbar';
import './style/style.scss'
import ProductDetail from './components/Product/ProductDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductContainer />} />
        <Route path="/product/:id" component={ProductDetail} />
      </Routes>
    </BrowserRouter>
  );
}
