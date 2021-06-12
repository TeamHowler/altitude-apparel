import React from 'react';

const paragraphStyle = {
  display: 'inline',
  fontSize: 'smaller',
  color: 'grey',
  marginLeft: 10,
};

function QABox({showQ, showA}) {
  return (
    <>
      <h4>Q: {showQ} </h4>
      <h4>A: {showA}</h4>
    </>
  );
}

export default QABox;
