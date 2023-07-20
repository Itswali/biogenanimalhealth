import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/Contact/ContactUs'
import './style/style.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
