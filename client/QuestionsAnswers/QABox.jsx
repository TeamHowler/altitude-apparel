import React from 'react';
import Answers from './Answers.jsx';

const paragraphStyle = {
  display: 'inline',
  fontSize: 12,
  color: 'grey',
  marginLeft: 10,
};

function QABox({question}) {
  {console.log('QABOX', question)}
  const answers = Object.values(question.answers);
  const firstAnswer = answers[0];
  return (
    <>
      <h4>Q: {question.question_body}
        <span style={paragraphStyle}>Helpful? Yes ({question.question_helpfulness})</span>
      </h4>

      {answers.map((answer) =>
        <Answers key={answer.id}
          answer={answer.body}
        />,
      )}
    </>
  );
}

export default QABox;
