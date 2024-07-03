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
    <div>
      <h2>Product List</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
              </div>
              <div className="col">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
