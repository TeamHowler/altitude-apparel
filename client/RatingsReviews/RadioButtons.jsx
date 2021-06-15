import React, {useContext} from 'react';
// import axios from 'axios';
import {ProductContext} from '../context.js';
import {Form} from 'react-bootstrap/';

function RadioButtons({characteristic}) {
  const {currentId, meta, newReview, updateNewReview} = useContext(ProductContext);

  function changeHandler(event) {
    console.log('radio button id===', event.target.name);
    console.log('radio button label====', typeof parseInt(event.target.value));
    // updateNewReview({...newReview,
    // `characteristics[event.target.name]: event.target.value`});
  };

  // console.log('characteristic inside radio buttons',
  // meta['characteristics'][characteristic]);

  return (
    <div>
      <h6>* {characteristic}</h6>
      {/* <Form.Check required onChange={changeHandler} > */}
      {/* <Form.Check.Input type='radio' isInvalid /> */}
      {/* <Form.Check.Label>{characteristic}</Form.Check.Label> */}
      <Form.Check
        inline label="1"
        name={meta['characteristics'][characteristic].id}
        type='radio' onChange={changeHandler} value='1' />
      <Form.Check
        inline label="2"
        name={meta['characteristics'][characteristic].id}
        type='radio' onChange={changeHandler} value='2' />
      <Form.Check
        inline label="3"
        name={meta['characteristics'][characteristic].id}
        type='radio' onChange={changeHandler} value='3' />
      <Form.Check
        inline label="4"
        name={meta['characteristics'][characteristic].id}
        type='radio' onChange={changeHandler} value='4' />
      <Form.Check
        inline label="5"
        name={meta['characteristics'][characteristic].id}
        type='radio' onChange={changeHandler} value='5' />
      {/* <Form.Control.Feedback type="valid">
      You did it!</Form.Control.Feedback> */}
      {/* </Form.Check> */}
    </div>
  );
}

export default RadioButtons;
