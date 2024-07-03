import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/apiService';

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
