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
