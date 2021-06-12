import React from 'react';

const paragraphStyle = {
  display: 'inline',
  fontSize: 'smaller',
  color: 'grey',
  marginLeft: 10,
};

function QABox({question, answers}) {
  return (
    <>
      <h4>Q: {question.question_body} </h4>
      {answers.map((answer) =>
        <h4>{answer.body}</h4>)}
      <h4>A: {console.log(answers)}</h4>
    </>
  );
}

export default QABox;
