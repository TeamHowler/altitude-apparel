import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Image, Row, Container, Col} from 'react-bootstrap';

function Thumbnails() {
  const {styles, updateCurrentStyle, currentStyle, updateDefault} =
   useContext(ProductContext);
  if (currentStyle === undefined) {
    return <div>Waiting...</div>;
  } else {
    return (
      <Col>
        <p><font style={{fontWeight: 'bold'}}>Style {'>'}
        </font>{currentStyle.name}</p>
        <Row className="d-flex flex-wrap"xs={5} m={5}>
          {styles.results.map((result) => {
            return (<Image src={result.photos[0].thumbnail_url}
              key={result.style_id}
              roundedCircle thumbnail
              onClick={(e) => {
                e.preventDefault();
                updateCurrentStyle(result);
                updateDefault(false);
              }}/>);
          })
          }
        </Row>
        {console.log(currentStyle)}
      </Col>
    );
  }
};

export default Thumbnails;
