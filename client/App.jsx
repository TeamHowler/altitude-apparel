
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from './context.js';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';

function App() {
  const[currentProduct, setCurrentProduct] = useState({product_id: '18080'});
  const [products, updateProduct] = useState([]);
  const[reviews, updateReview] = useState([]);
  const[styles, updateStyles] = useState([]);

  // /18078/styles'
  // /${currentProduct.product_id}/styles
  const fetch = () => {
    axios.get(`/products`)
        .then((response) => {
          console.log('response.data in app - fetch products', response.data);
          updateProduct(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const fetchStyles = () => {
    const productStyle = {currentProduct};
    console.log('product passed into fetch styles', `/products/${productStyle.currentProduct.product_id}/styles`);
    axios.get(`/products/${productStyle.currentProduct.product_id}/styles`)
        .then((response) => {
          console.log('response in app - fetch styles', response.data.results);
          updateStyles(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const fetchReviews = () => {
    const currentID = {currentProduct};
    axios.get(`/reviews/${currentID.currentProduct.product_id}`)
        .then((response) => {
          console.log('response.data in app - fetch reviews', response.data.results);
          updateReview(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    fetch();
    fetchReviews();
    fetchStyles();
    // products.map((product) => fetchStyles({product}));
  }, []);

  return (
    <ProductContext.Provider value={{
      products,
    }}>
      {/* {products.map((product) =>
        <ProductDetails key={product.style_id} product={product} />)} */}

      {styles.map((style) =>
        <ProductDetails key={style.style_id} style={style} />)}

      {reviews.map((review) =>
        <RatingsReviews key={review.review_id} review={review} />)}
      {/* <RatingsReviews /> */}
    </ProductContext.Provider>
  );
}

export default App;
