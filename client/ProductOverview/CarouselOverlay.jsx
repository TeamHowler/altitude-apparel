import React, {useContext} from 'react';
import {Card, CardColumns, Col} from 'react-bootstrap';
import {ProductContext} from '../context.js';

function CarouselOverlay() {
  const {currentStyle} = useContext(ProductContext);
  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <>
        <style>
          {`
    .overlay {
      position: absolute;
      top: 0;
      border: transparent;
      background-color: transparent;
      width: 200px;
      height: 100%;
      transition: .5s ease;
      opacity:0;
      color: green;
      font-size: 20px;
      padding: 0px;
      z-index: 0;
      text-align: left;
    }

    /* When you mouse over the container, fade in the overlay title */
    .overlay:hover {
      opacity: 1;
    }

    .cardOverlay {
      height: 4rem;
      width: 4rem;
      margin-bottom: 20px;
      background-color: grey;
      border-radius: 50%;
      opacity: 50;
    }
    `}
        </style>
        <Col className="overlay">
          {currentStyle.photos.map((image) => {
            return <Card key={currentStyle.photos.indexOf(image)}
              className='cardOverlay'>
              <img src={image.url}
                style={{borderRadius: '50%', height: '4rem',
                  width: '4rem', opacity: '50'}}/>
            </Card>;
          })}

        </Col>
      </>
    );
  }
};

export default CarouselOverlay;
