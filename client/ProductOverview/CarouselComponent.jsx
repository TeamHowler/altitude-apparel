import React, {useContext} from 'react';
import CarouselPhotos from './CarouselPhotos.jsx';
import {ProductContext} from '../context.js';
import {Carousel, Container} from 'react-bootstrap';

function CarouselComponent() {
  const {currentStyle, photos, setPhotos, active, updateActive} =
   useContext(ProductContext);

  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <Container>
        <Carousel indicators={false} controls={false}
          activeIndex={active} interval={null}>
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
      </Container>
    );
  };
};

export default CarouselComponent;
