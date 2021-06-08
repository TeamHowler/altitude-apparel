
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import ProductContext from './context.js';

function App() {
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);

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
    <ProductContext.Provider>

      <ProductDetail />

      <RatingsReviews />
    </ProductContext.Provider>
  );
}

export default App;
