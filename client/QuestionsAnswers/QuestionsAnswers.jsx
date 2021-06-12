import React, {useState, useEffect, useContext} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import {Row, Col, Image} from 'react-bootstrap';
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


  function fetchQuestions() {

  }

  useEffect(() => {
    if (currentProduct.id) {
      axios.get(`/qa/questions/${currentProduct.id}`)
          .then((response) => {
            updateQuestions(response.data.results);
            console.log('QUESTIONS:::::', response.data.results);
            updateFirstQuestion(response.data.results[0].question_body);
          });

      axios.get(`/qa/questions/${114310}/answers`)
          .then((response) => {
            updateAnswers(response.data);
            console.log('ANSWERS:::::', response.data);
          });
    }
  }, [currentProduct]);

  if ( currentQuestions.length > 0 ) {
    currentQuestions.map;
  }


  return (
    <section id="Questions and Answers">
      <h2>Questions and Answers</h2>
      <div className='qa-container'>
        <div>
          { currentQuestions.length > 0 ?
             currentQuestions.map((question) => {
               <QABox question="question" />;
             }) :
           console.log('hello')};
        </div>

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
};

export default QuestionsAnswers;
