import React, {useContext} from 'react';
import CarouselPhotos from './CarouselPhotos.jsx';
import {ProductContext} from '../context.js';
import {Carousel} from 'react-bootstrap';

function CarouselComponent() {
  const {currentStyle} =
   useContext(ProductContext);


  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
<<<<<<< HEAD
      <>
        <Carousel controls={false} interval={null}>
          {currentStyle.photos.map((image) => {
            return (
              <Carousel.Item style={{objectFit: 'cover',
                alignContent: 'center'}} key={image.url}>
                <CarouselPhotos image={image} key={image.url} />
              </Carousel.Item>
            );
          })}
          {console.log('carousel, ', currentStyle)}
        </Carousel>
      </>
=======
      <Carousel interval={null}>
        {currentStyle.photos.map((image) => {
          return (

            <Carousel.Item style={{height: '30rem',
              width: '30rem', backgroundSize: 'cover'}}
            key={image.url}>
              <CarouselPhotos image={image} key={image.url} />

            </Carousel.Item>
          );
        })}
        {console.log('carousel, ', currentStyle)}
      </Carousel>

>>>>>>> 8dc56896038f8e69381ac328facd1e3eb78e4825
    );
  };
};

export default CarouselComponent;
