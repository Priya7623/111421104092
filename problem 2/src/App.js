import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchProducts } from './api'; 
import AllProducts from './AllProducts'; 
import ProductPage from './ProductPage'; 

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        const response = await fetchProducts('AMZ', 'Laptop', 10, 1, 10000); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchAndSetProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts products={products} />} />
        <Route path="/product/:productId" element={<ProductPage products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
