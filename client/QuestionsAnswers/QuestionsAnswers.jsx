import React, {useState, useEffect, useContext} from 'react';
import {ProductContext} from '../context.js';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';
import {qaSection} from './QAstyle.jsx';
import {Container} from 'react-bootstrap';


function QuestionsAnswers() {
  const {currentProduct} = useContext(ProductContext);
  const [questions, setQuestions] = useState([]);


  function fetchQuestions() {
    axios.get(`/qa/questions/${currentProduct.id}&page=1&count=100`)
        .then((result) => result.data.results).then(setQuestions);
  }


  useEffect(() => {
    if (currentProduct.id) {
      fetchQuestions();
    }
  }, [currentProduct]);

  return (
    <section id="QuestionsAndAnswers" style={qaSection}>
      <Container>
        <h3>Questions and Answers</h3>
        <SearchQuestions />
        <QuestionsList questionList={questions}/>
      </Container>
    </section>
  );
};

export default QuestionsAnswers;
