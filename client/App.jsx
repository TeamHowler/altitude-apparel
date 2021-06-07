
import React, {useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  const [product, updateProduct] = useState('');

  const fetch = () => {
    axios.get('/products')
        .then((response) => {
          updateProduct(response);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    fetch();
    console.log(product);
  });

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
          <Button variant="primary" onClick={(e) => {
            e.preventDefault();
            console.log(product);
          }
          }>Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* <ProductDetail /> */}
    </div>
  );
}

export default App;
