
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from './context.js';
import ProductDetails from './ProductDetails/ProductDetails.jsx';

function App() {
  const [products, updateProduct] = useState([]);

  const fetch = () => {
    axios.get('/products')
        .then((response) => {
          updateProduct(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };


  useEffect(() => {
    fetch();
  }, []);

  return (
    <ProductContext.Provider value={{
      products,
    }}>
      <ProductDetails />
    </ProductContext.Provider>
  );
}

export default App;
