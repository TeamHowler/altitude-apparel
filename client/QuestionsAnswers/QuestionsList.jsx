import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {ulStyle} from './QAstyle.jsx';

function QuestionsList({questions}) {
  return (
    <div style={ulStyle}>
      {questions.map((question) =>
        <Question
          key={question.question_id}
          question={question}
        />,
      )}
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
