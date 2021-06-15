/* eslint-disable no-tabs */
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {qaStyle} from './QAstyle.jsx';
import AnswerList from './AnswerList.jsx';

function Question({question}) {
  const answers = Object.values(question.answers);
  return (
    <li>
      <Row>
        <Col sm={.5}><span style={{fontWeight: 'bold'}}>Q:</span></Col>
        <Col xl={24}><p style={qaStyle}>{question.question_body}</p></Col>
      </Row>

      <Row>
        <Col sm={.5}><span style={{fontWeight: 'bold'}}>A:</span></Col>
        <Col xl={24}><AnswerList
          answers={answers}
          style={{display: 'inline'}}
        /></Col>
      </Row>
    </li>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
