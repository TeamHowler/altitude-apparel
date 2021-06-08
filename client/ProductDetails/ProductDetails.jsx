import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ProductDetail({product}) {
  const [product, updateProduct] = useState('');

  return (
    <Card style={{width: '18rem', background: 'lightblue'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title
             and make up the bulk of
            the cards content.
        </Card.Text>
        <Button onClick={(e) => {
          e.preventDefault();
          alert('hello');
        }
        }>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;
