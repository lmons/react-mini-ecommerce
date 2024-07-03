import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Fetch products from fakestoreapi
export const fetchProducts = () => {
  return axios.get(`${BASE_URL}/products`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching products:', error);
      throw error;
    });
};
export const fetchProductById = (id) => {
  return axios.get(`${BASE_URL}/products/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching product details:', error);
      throw error;
    });
}
