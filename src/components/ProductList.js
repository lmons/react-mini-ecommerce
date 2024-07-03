import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { fetchProducts } from '../services/apiService';

function ProductList() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Product List</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
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
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
