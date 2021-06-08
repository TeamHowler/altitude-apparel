import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from './context.js';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import {Nav, Navbar, NavDropdown, Container,
  FormControl, Button, Form} from 'react-bootstrap';

function App() {
  const [currentProduct, updateProduct] = useState([]);

  const fetch = () => {
    axios.get('/products/18080/')
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
      </Container>
      <ProductDetails />
    </ProductContext.Provider>
  );
}

export default App;
