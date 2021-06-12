
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
  const [firstQuestion, updateFirstQuestion] = useState('');
  const [firstAnswer, updateFirstAnswer] = useState('');

  useEffect(() => {
    if (!currentProduct.id) {
      return;
    } else {
      axios.get(`/qa/questions/${currentProduct.id}`)
          .then((response) => {
            updateQuestions(response.data.results);
            console.log(response.data.results)
            updateFirstQuestion(response.data.results[0].question_body)
            updateAnswers(response.data);
          });

      axios.get(`/qa/questions/${currentProduct.id}/answers`)
          .then((response) => {
            updateAnswers(response.data);
          });
    }
  }, [currentProduct]);



  let box1;
  if ( firstQuestion ) {
    box1 = <QABox showQ={firstQuestion} showA={firstAnswer}/>;
  } else {
    box1 = <QABox showQ={'did not resolve'} showA={firstAnswer} />;
  }

  // console.log(`question1`, question1)

  return (
    <section id="Questions and Answers">
      <h2>Questions and Answers</h2>
      <div className='qa-container'>
        <div>
          {box1}
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
};

export default QuestionsAnswers;
