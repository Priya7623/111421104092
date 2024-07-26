import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [companies, setCompanies] = useState([]); 
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: 100,
    maxPrice: 50000
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts(
          filters.category,
          filters.company,
          filters.minPrice,
          filters.maxPrice
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [filters]);

  useEffect(() => {
   
    const fetchFilters = async () => {
    
      const categoriesResponse = await fetch('http://28.244.56.144/test/categories');
      const companiesResponse = await fetch('http://28.244.56.144/test/companies');
      
      setCategories(await categoriesResponse.json());
      setCompanies(await companiesResponse.json());
    };

    fetchFilters();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="all-products">
      <h1>All Products</h1>
      <div className="filters">
        <label>
          Category:
          <select name="category" onChange={handleFilterChange} value={filters.category}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </label>
        <label>
          Company:
          <select name="company" onChange={handleFilterChange} value={filters.company}>
            <option value="">All Companies</option>
            {companies.map((company) => (
              <option key={company.id} value={company.name}>{company.name}</option>
            ))}
          </select>
        </label>
        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            min="0"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            min="0"
          />
        </label>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
