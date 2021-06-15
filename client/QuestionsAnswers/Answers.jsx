import React from 'react';
import moment from 'moment';
const paragraphStyle = {
  display: 'inline',
  fontSize: 12,
  color: 'grey',
  marginLeft: 10,
};

function Answers({answer}) {
  return (
    <>
      {/* {console.log('from answer comp...', answer)} */}
      <h4>A: {answer.body}</h4>
      <p style={paragraphStyle}>
        by {answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}
        | Helpful? Yes ({answer.helpfulness})
        | Report
      </p>
    </>
  );
}

export default Answers;
