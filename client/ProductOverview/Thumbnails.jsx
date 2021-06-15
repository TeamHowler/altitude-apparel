import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Image, Row, Container} from 'react-bootstrap';

function Thumbnails() {
  const {styles, updateCurrentStyle, currentStyle, updateDefault} =
   useContext(ProductContext);
  if (styles === undefined) {
    return <div>Waiting...</div>;
  } else {
    return (
      <Container>
        <Row>
          {/* <p>Style: {currentStyle.name}</p> */}
          {styles.results.map((result) => {
            return (<img src={result.photos[0].thumbnail_url}
              key={result.style_id}
              onClick={(e) => {
                e.preventDefault();
                updateCurrentStyle(result);
                updateDefault(false);
              }} style={{borderRadius: '50%', height: '4rem',
                width: '4rem', margin: '5px'}}/>);
          })
          }
        </Row>
      </Container>
    );
  }
};

export default Thumbnails;
