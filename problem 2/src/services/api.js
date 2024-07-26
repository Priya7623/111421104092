import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import { fetchProducts } from './services/api'; // Assuming fetchProducts is the function

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products without filters for simplicity
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };
    loadProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:productId" element={<ProductPage products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
