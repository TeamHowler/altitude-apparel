import React from 'react';
import {Image} from 'react-bootstrap';


const CarouselPhotos = ({image}) => {
  if (image === []) {
    return <h2>no image</h2>;
  } else {
    return (
      <Image src={image.url} fluid/>
    );
  }
};

export default CarouselPhotos;
