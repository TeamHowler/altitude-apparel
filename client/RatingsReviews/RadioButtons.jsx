import React, {useContext} from 'react';
import {ProductContext} from '../context.js';
import {Form} from 'react-bootstrap/';
import PropTypes from 'prop-types';

function RadioButtons({characteristic}) {
  const {meta, newReview, updateNewReview} = useContext(ProductContext);


  function changeHandler(event) {
    // create shallow copy of obj storage
    const newCharacteristics = {...newReview.characteristics};
    // re-assign new copy's values to form fields
    newCharacteristics[event.target.name] = parseInt(event.target.value);
    // merge this new copy with current state's characteristics obj
    updateNewReview({...newReview,
      'characteristics': newCharacteristics});
  };

  return (
    <div>
      <h6>* {characteristic}</h6>
      {/* <Form.Check required onChange={changeHandler} > */}
      {/* <Form.Check.Input type='radio' isInvalid /> */}
      {/* <Form.Check.Label>{characteristic}</Form.Check.Label> */}
      <Form required >
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
      </Form>
      {/* <Form.Control.Feedback type="valid">
      You did it!</Form.Control.Feedback> */}
      {/* </Form.Check> */}
    </div>
  );
}

export default RadioButtons;

RadioButtons.propTypes = {
  characteristic: PropTypes.string,
};
