import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from './context.js';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import {Nav, Navbar, NavDropdown, Container,
  FormControl, Button, Form} from 'react-bootstrap';
import RatingsAndReviews from './RatingsReviews/RatingsAndReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';

function App() {
  const [currentId, setCurrentId] = useState(18078);
  const [currentProduct, updateProduct] = useState([]);
  const [styles, updateStyles] = useState([]);
  const [currentStyle, updateCurrentStyle] = useState(undefined);
  const [defaultStyle, updateDefault] = useState(true);
  const [reviews, updateReview] = useState([]);
  const [rating, updateRating] = useState(0);
  const [count, updateCount] = useState(0);
  const [clickCount, updateClickCount] = useState(1);

  const fetch = () => {
    axios.get(`/products/${currentId}`)
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
    <ProductContext.Provider value={{
      currentProduct,
      styles,
      updateStyles,
      currentStyle,
      updateCurrentStyle,
      reviews,
      defaultStyle,
      updateDefault,
      reviews,
      updateReview,
      rating,
      updateRating,
      count,
      updateCount,
      clickCount,
      updateClickCount,
      currentId,
    }}>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Altitude Apparel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search"
                className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <ProductOverview />
        <QuestionsAnswers />
        <RatingsAndReviews />
      </Container>
    </ProductContext.Provider>
  );
}

export default App;
