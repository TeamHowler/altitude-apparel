import React from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList.jsx';

function Question({question}) {
  return (
    <li>
      Q: {question.question_body}
			<div>A: <AnswerList
        answers={Object.values(question.answers)}
        style={{display: 'inline'}}
      /></div>

    </li>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
