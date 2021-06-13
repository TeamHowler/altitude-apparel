import React from 'react';

function Answers(answer) {

  return (
    <>
      {console.log('from answer comp...', answer)}
      <h4>A: {answer.answer}</h4>
    </>
  );
}

export default Answers;
