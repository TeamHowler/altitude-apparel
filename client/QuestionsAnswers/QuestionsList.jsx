import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {ulStyle, mL23, pL17} from './QAstyle.jsx';

function QuestionsList({questionList}) {
  const sortedQuestions = questionList.sort(
      ({question_helpfulness: a},
          {question_helpfulness: b}) => b-a);
  const firstTwoQuestions = sortedQuestions.slice(0, 2);
  const [moreQuestions, setMoreQuestions] = useState(false);
  let questions;

  moreQuestions ? questions = sortedQuestions :
  questions = firstTwoQuestions;



  return (
    <Container style={ulStyle}>
      {questions.map((question) =>
        <Question
          key={question.question_id}
          question={question}
        />,
      )}
      <Row style={pL17}>
        <Button
          style={mL23}
          className="shadow-none"
          onClick={() => setMoreQuestions(!moreQuestions)}
          variant="outline-dark">Load More Questions</Button>
        <Button
          style={mL23}
          className="shadow-none"
          variant="outline-dark">
          Add a Question</Button>
      </Row>

    </Container>
  );
}

QuestionsList.propTypes = {
  questionList: PropTypes.array,
};

export default QuestionsList;
