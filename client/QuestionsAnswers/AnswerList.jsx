import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import {Row, Col, Button} from 'react-bootstrap';
import {mL23, QAfont, blackUnderline} from './QAstyle.jsx';

function AnswerList({answers}) {
  const sortedAnswers = answers.sort(
      ({helpfulness: a},
          {helpfulness: b}) => b-a);
  const firstTwoAnswers = sortedAnswers.slice(0, 2);
  const [moreAnswers, loadMoreAnswers] = useState(false);
  let currentAnswers;

  moreAnswers ? currentAnswers = sortedAnswers :
  currentAnswers = firstTwoAnswers;

  const renderButton = () => {
    if ( sortedAnswers.length > 2 ) {
      return <Button
        className="shadow-none"
        variant="link"
        style={blackUnderline}
        onClick={() =>
          loadMoreAnswers(!moreAnswers)}>
            Load more answers</Button>;
    }
  };

  return (
    <div>
      <Row>
        <Col sm={.5} style={QAfont}>A: </Col>
        <Col lg={24}>
          {currentAnswers.map((answer) =>
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
  answers: PropTypes.array,
};

export default AnswerList;
