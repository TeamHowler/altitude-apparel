import React, {useContext} from 'react';
// import CarouselPhotos from './CarouselPhotos.jsx';
import {ProductContext} from '../context.js';
import {Carousel, Image} from 'react-bootstrap';

function CarouselComponent() {
  const {currentStyle, photos, setPhotos, active} =
   useContext(ProductContext);

  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <Carousel indicators={false} controls={false}
        activeIndex={active} interval={null} style={{height: '25rem'}}>
        {setPhotos(currentStyle.photos)}
        {photos.map((image) => {
          return (
            <Carousel.Item style={{textAlign: 'center'}}
              key={image.url}>
              <Image src={image.url} style={{height: '30rem', width: 'auto'}}/>
            </Carousel.Item>
          );
        })}
      </Carousel>

    );
  };
};

export default CarouselComponent;
