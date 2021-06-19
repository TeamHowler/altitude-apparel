import React from 'react';
// import axios from 'axios';
import {Row, Col, Container} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Qfont, QAfont, qaMetaStyle} from './QAstyle.jsx';
import AnswerList from './AnswerList.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import IncrimentQuestionHelpfulness from './QuestionHelpfulness.jsx';

function Question({question}) {
  const answers = Object.values(question.answers);
  const helpfulCount = question.question_helpfulness;


  // function fetchAnswers() {
  //   axios.get(`/qa/questions/${question.question_id}/answers`)
  //       .then((result) => result.data.results);
  //   // .then(updateAnswers);
  // }

  return (
    <Container>
      <Row>
        <Col sm={.5} style={QAfont}>Q:</Col>
        <Col m={4} style={Qfont}>{question.question_body}</Col>
        <Col m={6} style={qaMetaStyle}>
          <IncrimentQuestionHelpfulness helpfulCount={helpfulCount}/>|
          <AddAnswerModal />
        </Col>
      </Row>

      <AnswerList answerList={answers}/>
    </Container>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
