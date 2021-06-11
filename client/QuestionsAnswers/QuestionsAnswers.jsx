
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


  useEffect(() => {
    if (!currentProduct.id) {
      return;
    } else {
      axios.get(`/qa/questions/${currentProduct.id}`)
          .then((response) => {
            updateQuestions(response.data.results);
            updateAnswers(response.data);
          });

      axios.get(`/qa/questions/${currentProduct.id}/answers`)
          .then((response) => {
            updateAnswers(response.data);
          });
    }
  }, [currentProduct]);

  let qs;
  if ( currentQuestions ) {
    qs = currentQuestions[0].question_id;
  }


  {if ( currentQuestions ) {
    return (
      <section id="Questions and Answers">
        <h2>Questions and Answers</h2>
        <div className='qa-container'>
          <div>
            <h4>{currentQuestions.map(( question ) => question.question_id) }</h4>
            <h4>A:
              <p style={paragraphStyle}>testing the answers text </p>
            </h4>
          </div>

          <br></br>
          <p style={paragraphStyle}>
          by User1337, May 1, 2019  |  Helpful?  Yes (0)  |  Report
          </p>

          <Row>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" rounded
                style={{border: '2px solid grey'}} />
            </Col>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="holder.js/171x180" thumbnail />
            </Col>
          </Row>
        </div>
      </section>
    );
  }}
};

export default QuestionsAnswers;
