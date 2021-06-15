import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import {Row, Col, Container} from 'react-bootstrap';
import {QAfont, ulStyle} from './QAstyle.jsx';
import {Route} from 'react-router';

function AnswerList({answers}) {
  return (
    <div>
      <Row>
        <Col sm={.5} style={QAfont}>A: </Col>
        <Col lg={24}>
          {answers.map((answer) =>
            <Answer
              key={answer.id}
              answer={answer}
            />,
          )}</Col>
      </Row>


    </div>
  );
}

AnswerList.propTypes = {
  answers: PropTypes.array,
};

export default AnswerList;
