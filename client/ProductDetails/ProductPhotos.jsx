import React, {useContext, useState, useEffect} from 'react';
import {ProductContext} from '../context.js';


function ProductPhotos({photo}) {
  // const {products} = useContext(ProductContext);

  return (
    <div>
      {/* {console.log('photos====', photo)} */}
      <img src={photo} />
    </div>
  );
}

export default ProductPhotos;
