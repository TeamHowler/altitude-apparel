/* eslint-disable no-tabs */
import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Qfont, QAfont, qaMetaStyle} from './QAstyle.jsx';
import AnswerList from './AnswerList.jsx';

function Question({question}) {
  const answers = Object.values(question.answers);
  const helpfulCount = question.question_helpfulness;
  console.log(question);
  return (
    <Container>
      <Row>
        <Col sm={.5}><span style={QAfont}>Q:</span></Col>
        <Col lg={6}><p style={Qfont}>{question.question_body}</p></Col>
        <Col m={6}><p style={qaMetaStyle}>{helpfulCount}</p></Col>
      </Row>

      <Row>
        <Col sm={.5}><span style={QAfont}>A:</span></Col>
        <Col xl={24}><AnswerList
          answers={answers}
          style={{display: 'inline'}}
        /></Col>
      </Row>
    </Container>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
