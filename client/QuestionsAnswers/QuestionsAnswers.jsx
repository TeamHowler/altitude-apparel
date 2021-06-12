import React, {useState, useEffect, useContext} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import {Row, Col, Image} from 'react-bootstrap';
import QABox from './QABox.jsx';


function QuestionsAnswers() {
  const {currentProduct} = useContext(ProductContext);
  const [currentQuestions, updateQuestions] = useState([]);
  const [currentAnswers, updateAnswers] = useState([]);

  function fetchQuestions() {
    axios.get(`/qa/questions/${currentProduct.id}`)
        .then((result) => result.data.results).then(updateQuestions);
  }

  function fetchAnswers() {
    axios.get(`/qa/questions/${114310}/answers`)
        .then((result) => result.data.results).then(updateAnswers);
  }

  useEffect(() => {
    if (currentProduct.id) {
      fetchQuestions();
      fetchAnswers();
    }
  }, [currentProduct]);


  return (

    <section id="Questions and Answers">
      <h2>Questions and Answers</h2>
      {/* {console.log('answers', currentAnswers)}
      {console.log('questions', currentQuestions)} */}
      <div className='qa-container'>
        {currentQuestions.map((question) =>
          <QABox key={question.question_id}
            question={question}
            answers={currentAnswers}
          />,
        )}
      </div>
    </section>
  );
};

export default QuestionsAnswers;
