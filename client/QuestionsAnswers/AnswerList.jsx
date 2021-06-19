import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import {Row, Col, Button} from 'react-bootstrap';
import {mL23, QAfont, black12} from './QAstyle.jsx';

function AnswerList({answerList}) {
  const sortedAnswers = answerList.sort(
      ({helpfulness: a},
          {helpfulness: b}) => b-a);
  const firstTwoAnswers = sortedAnswers.slice(0, 2);
  const [moreAnswers, loadMoreAnswers] = useState(false);
  let answers;

  moreAnswers ? answers = sortedAnswers :
  answers = firstTwoAnswers;

  const renderButton = () => {
    if ( sortedAnswers.length > 2 ) {
      return <Button
        className="shadow-none"
        variant="link"
        style={black12}
        onClick={() =>
          loadMoreAnswers(!moreAnswers)}>
            LOAD MORE ANSWERS</Button>;
    }
  };

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
      <Row>
        <Col style={mL23} sm={.5}> </Col>
        <Col lg={24}>{renderButton()}</Col>
      </Row>

    </div>
  );
}

AnswerList.propTypes = {
  answerList: PropTypes.array,
};

export default AnswerList;
