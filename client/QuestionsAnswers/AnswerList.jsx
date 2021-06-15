import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import {ulStyle} from './QAstyle.jsx';

function AnswerList({answers}) {
  return (
    <ul style={ulStyle}>
      {answers.map((answer) =>
        <Answer
          key={answer.id}
          answer={answer}
        />,
      )}
    </ul>
  );
}

AnswerList.propTypes = {
  answers: PropTypes.array,
};

export default AnswerList;
