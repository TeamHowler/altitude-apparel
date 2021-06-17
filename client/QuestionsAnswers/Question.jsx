import React from 'react';
import axios from 'axios';
import {Row, Col, Container} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Qfont, QAfont, qaMetaStyle} from './QAstyle.jsx';
import AnswerList from './AnswerList.jsx';

function Question({question}) {
  const answers = Object.values(question.answers);
  const helpfulCount = `Helpful?
		 Yes (${question.question_helpfulness})
	 | Add Answer`;


  function fetchAnswers() {
    axios.get(`/qa/questions/${question.question_id}/answers`)
        .then((result) => result.data.results)
        // .then(updateAnswers);
  }

  const testAns = fetchAnswers()
  console.log('testANS:::::', testAns)

  return (
    <Container>
      <Row>
        <Col sm={.5} style={QAfont}>Q:</Col>
        <Col m={4} style={Qfont}>{question.question_body}</Col>
        <Col m={6} style={qaMetaStyle}>{helpfulCount}</Col>
      </Row>

      <AnswerList answerList={answers}/>
    </Container>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
