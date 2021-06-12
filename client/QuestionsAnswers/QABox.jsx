import React from 'react';

const paragraphStyle = {
  display: 'inline',
  fontSize: 'smaller',
  color: 'grey',
  marginLeft: 10,
};

function QABox({question}) {
  return (
    <>
      <h4>Q: {question} </h4>
      <h4>A: answer</h4>
    </>
  );
}

export default QABox;
