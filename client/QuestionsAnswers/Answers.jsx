import React from 'react';
import moment from 'moment';
const paragraphStyle = {
  display: 'inline',
  fontSize: 12,
  color: 'grey',
  marginLeft: 30,
  marginBottom: 10,
  marginTop: 10
};

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
