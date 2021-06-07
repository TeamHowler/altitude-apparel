
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RatingsReviews from './RatingsReviews/RatingsReviews';

function App() {
  const [product, updateProduct] = useState('');

  const fetch = () => {
    axios.get('/products')
        .then((response) => {
          updateProduct(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
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
      {/* <ProductDetail /> */}

      {/* <RatingsReviews /> */}
      {/* <RatingsReviews /> */}
    </div>
  );
}

export default App;
