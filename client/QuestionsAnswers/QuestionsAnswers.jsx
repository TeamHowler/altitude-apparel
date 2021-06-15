import React, {useState, useEffect, useContext} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';


function QuestionsAnswers() {
  const {currentProduct} = useContext(ProductContext);
  const [questions, setQuestions] = useState([]);


  function fetchQuestions() {
    axios.get(`/qa/questions/${currentProduct.id}`)
        .then((result) => result.data.results).then(setQuestions);
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
    <section id="QuestionsAndAnswers">
      <h3>Questions and Answers</h3>
      <SearchQuestions />
      <QuestionsList questions={questions}/>

    </section>
  );
};

export default QuestionsAnswers;
