import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../context.js';
import ProductPhotos from './ProductPhotos.jsx';


function ProductDetails({style}) {
  // const {products} = useContext(ProductContext);

  return (
    <div>
      {/* {console.log('styles====', style.photos)} */}
      <span>
        {style.photos.map((photo) =>
          <ProductPhotos key={photo.url} photo={photo.thumbnail_url} />)}
      </span>
    </div>
  );
}

export default ProductDetails;
