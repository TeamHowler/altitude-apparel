import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import {ProductContext} from '../context.js';
import {Button, Form, Image} from 'react-bootstrap/';
import StarRatingComponent from 'react-star-rating-component';
import RadioButtons from './RadioButtons.jsx';

function AddReviewModalForm() {
  const {setReviewModalShow, meta,
    newReview, updateNewReview} = useContext(ProductContext);
  const [newReviewRating, updateNewReviewRating] = useState(0);

  const [validated, setValidated] = useState(false);

  function handleCloseModalClick() {
    setReviewModalShow(false);
  };

  function handleNewReviewStarClick(value) {
    updateNewReviewRating(value);
  };

  function handleReviewSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios.post('/reviews/', newReview)
          .then((response) => {
            console.log('response from review post!', response);
          });
    }

    setValidated(true);
  };

  function photosChangeHandler(event) {
    // create shallow copy of photo arr storage
    const newPhotos = newReview.photos.slice();
    // add new photo to shallow copy storage
    newPhotos.push(event.target.value);
    // newPhotos[parseInt(event.target.name)] =
    // URL.createObjectURL(event.target.files[0]);
    // merge this new copy with current state's photos arr
    updateNewReview({...newReview, 'photos': newPhotos});
  };

  function changeHandler(event) {
    updateNewReview({...newReview, [event.target.name]: event.target.value});
  };

  function recommendChangeHandler(event) {
    updateNewReview({...newReview,
      [event.target.name]: event.target.value === 'True'});
  };

  function starChangeHandler(event) {
    updateNewReview({...newReview, 'rating': newReviewRating});
  };

  const starValues = {
    '1': 'Poor',
    '2': 'Fair',
    '3': 'Average',
    '4': 'Good',
    '5': 'Great',
  };

  const starExplanation = starValues[JSON.stringify(newReviewRating)];

  useEffect(() => {
    starChangeHandler();
  }, [newReviewRating]);

  return (
    <Form className="needs-validation"
      noValidate validated={validated} onSubmit={handleReviewSubmit}>
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
          onChange={changeHandler}
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
        <Form.Label>* Review Body
          (min 50 characters, limit of 1,000 characters)</Form.Label>
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
      <h6>Upload your photo URL's below:</h6>
      <Form.Group>
        {/* <Form.File
          name="0"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler}
        />
        <Form.Control
          type="file"
          name="0"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler} />
        <Image src={newReview['photos'][0]}
          thumbnail width={171} height={180}/> */}

        <Form.Control
          type="url"
          name="1"
          placeholder="Include url to your photo here!"
          onChange={photosChangeHandler}
        />
        <Image src={newReview['photos'][0]}
          thumbnail width={171} height={180}/>

        <Form.Control
          type="url"
          name="2"
          placeholder="Include url to your photo here!"
          onChange={photosChangeHandler}
        />
        <Image src={newReview['photos'][1]}
          thumbnail width={171} height={180}/>

        <Form.Control
          type="url"
          name="3"
          placeholder="Include url to your photo here!"
          onChange={photosChangeHandler}
        />
        <Image src={newReview['photos'][2]}
          thumbnail width={171} height={180}/>

        <Form.Control
          type="url"
          name="4"
          placeholder="Include url to your photo here!"
          onChange={photosChangeHandler}
        />
        <Image src={newReview['photos'][3]}
          thumbnail width={171} height={180}/>

        <Form.Control
          type="url"
          name="5"
          placeholder="Include url to your photo here!"
          onChange={photosChangeHandler}
        />
        <Image src={newReview['photos'][4]}
          thumbnail width={171} height={180}/>

      </Form.Group>

      {/* Rate the characteristics */}
      <Form.Group controlId="characteristicsRadios">
        {Object.keys(meta['characteristics']).map((characteristic) => (
          <RadioButtons key={characteristic} characteristic={characteristic} />
        ))}
      </Form.Group>

      {/* Recommend the product? */}
      <Form.Group required >
        <h6>* Would you recommend this product?</h6>
        <Form required >
          <Form.Check
            inline label="True"
            name='recommend'
            type='radio' onChange={recommendChangeHandler} value='True' />
          <Form.Check
            inline label="False"
            name='recommend'
            type='radio' onChange={recommendChangeHandler} value='False' />
        </ Form>
      </Form.Group>


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
{/*
<h6>Upload your photos:</h6>
      <Form.Group>
        <Form.File
          name="0"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler}
        />
        <Form.Control
          type="file"
          name="0"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler} />
        <Image src={newReview['photos'][0]} thumbnail width={171} height={180}/>

        <Form.Control
          type="file"
          name="1"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler} />
        <Image src={newReview['photos'][1]} thumbnail width={171} height={180}/>

        <Form.Control
          type="file"
          name="2"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler} />
        <Image src={newReview['photos'][2]} thumbnail width={171} height={180}/>

        <Form.Control
          type="file"
          name="3"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler} />
        <Image src={newReview['photos'][3]} thumbnail width={171} height={180}/>

        <Form.Control
          type="file"
          name="4"
          id="exampleFormControlFile1"
          label="Upload your photo"
          onChange={photosChangeHandler} />
        <Image src={newReview['photos'][4]} thumbnail width={171} height={180}/>

        <Form.Control name="photos" onChange={photosChangeHandler} />

</Form.Group> */}
