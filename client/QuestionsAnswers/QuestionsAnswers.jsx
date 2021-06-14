import React, {useState, useEffect, useContext} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import {Row, Col, Image, FormControl} from 'react-bootstrap';
import QuestionsList from './QuestionsList.jsx';
import QASearchBox from './QASearchBox.jsx';


function QuestionsAnswers() {
  const {currentProduct} = useContext(ProductContext);
  const [currentQuestions, updateQuestions] = useState([]);

  function fetchQuestions() {
    axios.get(`/qa/questions/${currentProduct.id}`)
        .then((result) => result.data.results).then(updateQuestions);
  }

  // function fetchAnswers() {
  //   axios.get(`/qa/questions/${114310}/answers`)
  //       .then((result) => result.data.results).then(updateAnswers);
  // }

  useEffect(() => {
    if (currentProduct.id) {
      fetchQuestions();
    }
  }, [currentProduct]);


  return (

    <section id="Questions and Answers">
      <h2>Questions and Answers</h2>
      <QASearchBox />
      <div className='qa-container'>
        {currentQuestions.map((question) =>
          <QABox key={question.question_id}
            question={question}
          />,
        )}
      </div>

    </section>
  );
};

export default QuestionsAnswers;
