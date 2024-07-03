import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../services/apiService';
import Filters from './Filters';

function ProductList() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(products => {
        setProducts(products);
        setFilteredProducts(products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    fetchCategories()
      .then(categories => {
        setCategories(categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    fetchProductsByCategory(category)
      .then(products => {
        setFilteredProducts(products);
      })
      .catch(error => {
        console.error(`Error fetching products in category ${category}:`, error);
      });
  };

  const handleFilterChange = (filters) => {
    const { searchTerm, categoryFilter, priceFilter } = filters;
    const filtered = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !categoryFilter || product.category === categoryFilter;
      const matchesPrice = !priceFilter || product.price <= parseFloat(priceFilter);
      return matchesSearch && matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="container">
      <h2 className="my-4">Product List</h2>
      <Filters categories={categories} onFilterChange={handleFilterChange} />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 d-flex flex-column">
              <div style={{ minHeight: '300px', maxHeight: '200px', overflow: 'hidden' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
                <div className="mt-auto d-flex justify-content-between">
                  <Link to={`/products/${product.id}`} className="btn btn-secondary me-2">View Details</Link>
                  <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                    <FaShoppingCart className="me-1" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
