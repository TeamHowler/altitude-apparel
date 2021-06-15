import React from 'react';
import moment from 'moment';
import {paragraphStyle} from './QAstyle.jsx';

function Answers({answer}) {
  return (
    <li>
      <p style={{marginLeft: 20, marginBottom: 5}}>{answer.body}</p>
      <p style={paragraphStyle}>
        {`by ${answer.answerer_name},
        ${moment(answer.date).format('MMMM Do YYYY')}
        | Helpful? Yes (${answer.helpfulness})
        | Report`}
      </p>
    </li>
  );
}

export default Answers;
