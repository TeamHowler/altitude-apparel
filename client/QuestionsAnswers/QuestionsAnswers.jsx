
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, FormControl, Button, Row, Col, Image, Border} from 'react-bootstrap';

const paragraphStyle = {
  display: 'inline',
  fontSize: 'smaller',
  color: 'grey',
  marginLeft: 10,
};

// const questions = () => {
//   axios.get('')
// }

const QuestionsAnswers = () => (

  <Container>
    <section></section>
    <h2>Questions and Answers</h2>
    <FormControl
      type='search'
      placeholder='search'/>
    <div className='qa-container'>
      <h4>Q: Who what which when where why whether how?</h4>
      <h4>A:
        <p style={paragraphStyle}>testing the answers text </p>
      </h4>
      <br></br>
      <p style={paragraphStyle}>by User1337, May 1, 2019  |  Helpful?  Yes (0)  |  Report</p>

      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded
            style={{border: '2px solid grey'}}/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>

    </div>
  </Container>

);

export default QuestionsAnswers;
