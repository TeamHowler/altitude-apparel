import React, {useContext} from 'react';
import CarouselPhotos from './CarouselPhotos.jsx';
import {ProductContext} from '../context.js';
import {Carousel} from 'react-bootstrap';

function CarouselComponent() {
  const {currentStyle, photos, setPhotos} = useContext(ProductContext);


  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <>
        <style>
          {`
          .carousel-control-next-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
        }

      .carousel-control-prev-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
      }
        `}
        </style>
        <Carousel interval={null}>
          {setPhotos(currentStyle.photos)}
          {photos.map((image) => {
            return (
              <Carousel.Item style={{textAlign: 'center'}}
                key={image.url}>
                <CarouselPhotos image={image} key={image.url} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  };
};

export default CarouselComponent;
