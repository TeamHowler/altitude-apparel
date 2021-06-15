import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {Container} from 'react-bootstrap';
import {ulStyle} from './QAstyle.jsx';

function QuestionsList({questions}) {
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
