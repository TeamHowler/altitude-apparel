import React from 'react';
import Answers from './Answers.jsx';

const paragraphStyle = {
  display: 'inline',
  fontSize: 'smaller',
  color: 'grey',
  marginLeft: 10,
};

function QABox({question}) {

  const answers = Object.values(question.answers);
  const firstAnswer = answers[0];
  return (
    <>
      {console.log('QUESTION BOX', answers)}
      <h4>Q: {question.question_body} </h4>

      {answers.map((answer) =>
        <Answers key={answer.id}
          answer={answer.body}
        />,
      )}
    </>
  );
}

export default QABox;
