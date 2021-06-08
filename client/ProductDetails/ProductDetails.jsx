import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../context.js';


function ProductDetails() {
  const {products} = useContext(ProductContext);

  return (
    <div>
      {console.log(products)}
    </div>
  );
}

export default ProductDetails;
