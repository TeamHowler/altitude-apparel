import React from 'react';
// import axios from 'axios';
// import {ProductContext} from '../context.js';
import {Button, Form} from 'react-bootstrap/';

function AddReviewModalForm() {
  // const {modalShow, setModalShow, currentProduct} =
  // useContext(ProductContext);

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
           We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {/* Review summary textbox */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review Summary (limit of 60 characters)</Form.Label>
        <Form.Control
          as="textarea"
          maxLength="60"
          placeholder="Example: Best purchase ever!"
        />
      </Form.Group>

      {/* Review body textbox */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review Body (limit of 1,000 characters)</Form.Label>
        <Form.Control
          as="textarea"
          maxLength="1000"
          placeholder="Why did you like the product or not?"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
           Submit
      </Button>
    </Form>
  );
}

export default AddReviewModalForm;
