import axios from 'axios';

const unwrap = response => {
  if (response.status !== 200) {
    console.error('Error fetching data', response.status, response);
    throw new Error(response);
  }

  return response.data;
};

export const getProductsData = () => {
  return axios.get(`https://my-json-server.typicode.com/carlosrobles/simple-api-mock/products`).then(unwrap);
};

export const getProductData = (id) => {
  return axios.get(`https://my-json-server.typicode.com/carlosrobles/simple-api-mock/products/${id}`).then(unwrap);
}