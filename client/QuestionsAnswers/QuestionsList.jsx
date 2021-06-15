import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {Container} from 'react-bootstrap';
import {ulStyle} from './QAstyle.jsx';

function QuestionsList({questions}) {
  // sort questions by most helpful
  questions = questions.sort(
      ({question_helpfulness: a},
          {question_helpfulness: b}) => b-a);

  const firstTwoQuestions = questions.slice(0, 2);

  return (
    <Container style={ulStyle}>
      {questions.map((question) =>
        <Question
          key={question.question_id}
          question={question}
        />,
      )}
    </Container>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
