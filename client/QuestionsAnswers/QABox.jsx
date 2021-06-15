/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React from 'react';
import Answers from './Answers.jsx';

const qHelpfulStyle = {
  display: 'inline',
  fontSize: 12,
  color: 'grey',
  marginLeft: 10,
};

function QABox({question}) {
  // {console.log('QABOX', question)}
  const answers = Object.values(question.answers);
  const firstAnswer = answers[0];
  return (
    <>
      <h4>Q: {question.question_body}
        <span style={qHelpfulStyle}>Helpful? Yes ({question.question_helpfulness})</span>
      </h4>

      {answers.map((answer) =>
<<<<<<< HEAD
        <h4>{answer.body}</h4>)}
      {/* <h4>A: {console.log(answers)}</h4> */}
=======
        <Answers key={answer.id}
          answer={answer}
        />,
      )}
>>>>>>> c6627b1923e3a1f39d673dbaeaa15433abf3d0a1
    </>
  );
}

export default QABox;
