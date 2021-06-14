import React, {useState, useContext} from 'react';
// import axios from 'axios';
import {ProductContext} from '../context.js';
import {Button, Form} from 'react-bootstrap/';
import StarRatingComponent from 'react-star-rating-component';

function AddReviewModalForm() {
  const {currentId, setModalShow, meta} = useContext(ProductContext);
  const [newReviewRating, updateNewReviewRating] = useState(0);
  const [newReview, updateNewReview] =
    useState({
      'product_id': currentId,
      'rating': null,
      'summary': null,
      'name': null,
      'body': null,
      'recommend': null,
      'email': null,
      'photos': [],
      'characteristics': {"<product specific characteristic id's>": "NUM rating 1-5"}
    });
  const [validated, setValidated] = useState(false);

  console.log('meta in add review modal', meta);

  function handleCloseModalClick() {
    setModalShow(false);
  };

  function handleNewReviewStarClick(value) {
    updateNewReviewRating(value);
  };

  function handleReviewSubmit(event) {
    // event.preventDefault();
    // event.target.className += " was-validated";
    // // multiple property validation could go here
    // if (event.target.checkValidity()) {
    //   console.log("dispatch an action");
    // }
    console.log('INSIDE OF FORM SUBMISSION!!!');
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log('new review after form submit====', newReview);
    updateNewReview({...newReview, rating: newReviewRating});
    setValidated(true);
  };

  function changeHandler(event) {
    console.log('event name===', event.target.name);
    console.log('event value====', event.target.value);
    updateNewReview({...newReview, [event.target.name]: event.target.value});
  };

  const starValues = {
    '1': 'Poor',
    '2': 'Fair',
    '3': 'Average',
    '4': 'Good',
    '5': 'Great',
  };

  const starExplanation = starValues[JSON.stringify(newReviewRating)];

  return (
    <Form className="needs-validation" noValidate validated={validated} onSubmit={handleReviewSubmit}>
      {/* Select a star value */}
      <Form.Group controlId="formStarValue" >
        <Form.Label>* Overall Rating:</Form.Label>
        <br />
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={newReviewRating}
          onStarClick={handleNewReviewStarClick.bind(this)}
          emptyStarColor={'#778899'}
        />
        <Form.Control required placeholder={starExplanation} disabled />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      {/* Email form field */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>* Your Email (limit of 60 characters) </Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Example: jackson11@email.com"
          maxLength="60"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please include your email address.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
           We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {/* Nickname form field */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          * What is your nickname? (limit of 60 characters)
        </Form.Label>
        <Form.Control
          name="name"
          as="textarea"
          maxLength="60"
          required
          onChange={changeHandler}
        />
        <Form.Control.Feedback textarea="invalid">
          Nickname is required - with a max of 60 characters.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Review summary textbox */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review Summary (limit of 60 characters)</Form.Label>
        <Form.Control
          name="summary"
          as="textarea"
          maxLength="60"
          placeholder="Example: Best purchase ever!"
          onChange={changeHandler}
        />
      </Form.Group>

      {/* Review body textbox */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>* Review Body (limit of 1,000 characters)</Form.Label>
        <Form.Control
          name="body"
          as="textarea"
          minLength="50"
          maxLength="1000"
          placeholder="Why did you like the product or not?"
          required
          onChange={changeHandler}
        />
        <Form.Control.Feedback textarea="invalid">
          Review Body is required - with a min of 50 & max of 1000 characters.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Upload photos */}
      <Form.Group>
        <Form.File
          name="photos"
          id="exampleFormControlFile1"
          label="Upload your photos"
          onChange={(event) => (newReview.photos.push(event.target.data))}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button
        variant="primary"
        type="submit"
        // onClick={handleCloseModalClick}
      >
           Submit review!
      </Button>
    </Form>
  );
}

export default AddReviewModalForm;
