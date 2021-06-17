import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {Container, Button, Row} from 'react-bootstrap';
import {ulStyle, pL17} from './QAstyle.jsx';

function QuestionsList({questions}) {
  const sortedQuestions = questions.sort(
      ({question_helpfulness: a},
          {question_helpfulness: b}) => b-a);
  const firstTwoQuestions = sortedQuestions.slice(0, 2);
  const [moreQuestions, setMoreQuestions] = useState(false);
  let currentQuestions;

  moreQuestions ? currentQuestions = sortedQuestions :
  currentQuestions = firstTwoQuestions;

  return (
    <Container style={ulStyle}>
      {currentQuestions.map((question) =>
        <Question
          key={question.question_id}
          question={question}
        />,
      )}
      <Row style={pL17}>
        <Button style={pL17}onClick={() => setMoreQuestions(!moreQuestions)}
          variant="outline-dark">Load More Questions</Button>{' '}
        <Button variant="outline-dark">Add a Question</Button>
      </Row>

    </Container>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
