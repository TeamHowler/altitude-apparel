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
        {/* <p>Style: {currentStyle.name}</p> */}
        <Row xs={6}>
          {styles.results.map((result) => {
            return (<Image src={result.photos[0].thumbnail_url}
              key={result.style_id} roundedCircle thumbnail
              onClick={(e) => {
                e.preventDefault();
                updateCurrentStyle(result);
                updateDefault(false);
              }}/>);
          })
          }
        </Row>
      </Container>
    );
  }
};

export default Thumbnails;
