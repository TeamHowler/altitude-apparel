import React from 'react';
import moment from 'moment';
import {qaMetaStyle, qaStyle, answerStyle} from './QAstyle.jsx';
import PropTypes from 'prop-types';

function Answer({answer}) {
  return (
    <li style={answerStyle}>
      <p style={qaStyle}>{answer.body}</p>
      <p style={qaMetaStyle}>
        {`by ${answer.answerer_name},
        ${moment(answer.date).format('MMMM Do YYYY')}
        | Helpful? Yes (${answer.helpfulness})
        | Report`}
      </p>
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
};
export default Answer;
