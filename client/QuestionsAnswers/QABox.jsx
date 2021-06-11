import React from 'react';

const paragraphStyle = {
  display: 'inline',
  fontSize: 'smaller',
  color: 'grey',
  marginLeft: 10,
};

function QABox() {
  return (
    <div>
      <h4>Q:testing QUESTIONS</h4>
      <h4>A:
        <p style={paragraphStyle}>testing the answers text </p>
      </h4>
    </div>
  );
}

export default QABox;
