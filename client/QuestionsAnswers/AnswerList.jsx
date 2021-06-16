import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import {Row, Col, Container, Button} from 'react-bootstrap';
import {QAfont, ulStyle} from './QAstyle.jsx';

function AnswerList({answers}) {
  const sortedAnswers = answers.sort(
      ({helpfulness: a},
          {helpfulness: b}) => b-a);
  const firstTwoAnswers = sortedAnswers.slice(0, 2);
  const [moreAnswers, setMoreAnswers] = useState(false);
  let renderAnswers;

  moreAnswers ? renderAnswers = sortedAnswers :
    renderAnswers = firstTwoAnswers;
  return (
    <div>
      <Row>
        <Col sm={.5} style={QAfont}>A: </Col>
        <Col lg={24}>
          {renderAnswers.map((answer) =>
            <Answer
              key={answer.id}
              answer={answer}
            />,
          )}</Col>
      </Row>
      <Row>
        <Col sm={.5}>
          {`  `}
        </Col>
        <Col lg={24}>
          <Button onClick={() =>
            setMoreAnswers(!moreAnswers)}>
            Load more answers</Button>
        </Col>
      </Row>

    </div>
  );
}

AnswerList.propTypes = {
  answers: PropTypes.array,
};

export default AnswerList;
