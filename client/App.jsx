import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from './context.js';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import {Nav, Navbar, NavDropdown, Container,
  FormControl, Button, Form} from 'react-bootstrap';
import RatingsAndReviews from './RatingsReviews/RatingsAndReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';
import Expanded from './ProductOverview/Expanded.jsx';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentId, setCurrentId] = useState(46410);
  const [currentProduct, updateProduct] = useState([]);
  const [styles, updateStyles] = useState([]);
  const [currentStyle, updateCurrentStyle] = useState(undefined);
  const [defaultStyle, updateDefault] = useState(true);
  const [showModal, setModalShow] = useState(false);
  const [currentSize, updateSize] = useState('');
  const [currentQuant, updateQuant] = useState(0);
  const [cart, addToCart] = useState({});
  const [photos, setPhotos] = useState([]);
  const [active, updateActive] = useState(0);

  // Ratings & Reviews useState:
  const [reviews, updateReview] = useState([]);
  const [rating, updateRating] = useState(0);
  const [count, updateCount] = useState(0);
  const [clickCount, updateClickCount] = useState(1);
  const [modalShow, setReviewModalShow] = useState(false);
  const [meta, setMeta] = useState([]);
  const [newReview, updateNewReview] =
  useState({
    'product_id': currentId,
    'rating': null,
    'summary': '',
    'name': '',
    'body': '',
    'recommend': null,
    'email': null,
    'photos': [],
    'characteristics': {},
  });
  const [reviewsByStars, updateReviewsByStars] = useState([[], [], [], [], []]);
  const [sortingByStars, updateSortingByStars] = useState(false);
  const [starBarToggle, updatestarBarToggle] =
    useState([false, false, false, false, false]);
  const [reviewsCuedToDisplay, updateReviewsCuedToDisplay] = useState(0);
  const [reviewsByNewness, updateReviewsByNewness] = useState([]);

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
      currentId,
      styles,
      updateStyles,
      currentStyle,
      updateCurrentStyle,
      defaultStyle,
      updateDefault,
      showModal,
      setModalShow,
      currentSize,
      updateSize,
      currentQuant,
      updateQuant,
      cart,
      addToCart,
      photos,
      setPhotos,
      active,
      updateActive,
      // Ratings & Reviews Context:
      reviews,
      updateReview,
      rating,
      updateRating,
      count,
      updateCount,
      clickCount,
      updateClickCount,
      modalShow,
      setReviewModalShow,
      meta,
      setMeta,
      newReview,
      updateNewReview,
      reviewsByStars,
      updateReviewsByStars,
      sortingByStars,
      updateSortingByStars,
      starBarToggle,
      updatestarBarToggle,
      reviewsCuedToDisplay,
      updateReviewsCuedToDisplay,
      reviewsByNewness,
      updateReviewsByNewness,
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
            <i className="fas fa-shopping-cart fa-2x"
              onClick={(e) => {
                e.preventDefault();
                alert(cart);
              }}></i>
          </Navbar.Collapse>
        </Navbar>
        <ProductOverview />
        <QuestionsAnswers />
        <RatingsAndReviews />
        <Expanded show={showModal}/>
      </Container>
    </ProductContext.Provider>
  );
}

export default App;
