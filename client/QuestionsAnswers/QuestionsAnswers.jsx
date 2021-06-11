
import React, {useState, useEffect, useContext} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import {Container, FormControl, Row, Col, Image} from 'react-bootstrap';
import QABox from './QABox.jsx';


const paragraphStyle = {
  display: 'inline',
  fontSize: 'smaller',
  color: 'grey',
  marginLeft: 10,
};


function QuestionsAnswers() {
  const {currentProduct} = useContext(ProductContext);
  const [currentQuestions, updateQuestions] = useState([]);
  const [currentAnswers, updateAnswers] = useState([]);

  const getQuestions = () => {
    axios.get(`/qa/questions/${currentProduct.id}`)
        .then((response) => {
          updateQuestions(response.data);
          console.log('QUESTIONS=====', response.data)
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const getAnswers = () => {
    axios.get(`/qa/questions/${currentProduct.id}/answers`)
        .then((response) => {
          updateAnswers(response.data);
          console.log('ANSWERS=====', response.data)
        })
        .catch((err) => {
          console.log(err);
        });
  };


  useEffect(() => {
    if ( !currentProduct.id ) {
      return;
    } else {
      getQuestions();
      getAnswers();
    }
  }, [currentProduct]);



  return (
    <Container>
      <section></section>
      <h2>Questions and Answers</h2>
      <FormControl
        type='search'
        placeholder='search'/>
      <div className='qa-container'>
        <QABox questions={currentQuestions}/>

        <br></br>
        <p style={paragraphStyle}>
        by User1337, May 1, 2019  |  Helpful?  Yes (0)  |  Report
        </p>

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
};

export default QuestionsAnswers;
