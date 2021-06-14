import React from 'react';
import Answers from './Answers.jsx';
import {Row, Col, Image, FormControl} from 'react-bootstrap';

const qHelpfulStyle = {
  display: 'inline',
  fontSize: 12,
  color: 'grey',
  marginLeft: 10,
};

function QABox({question}) {
  {console.log('QABOX', question);}
  const answers = Object.values(question.answers);
  const firstAnswer = answers[0];
  return (
    <>
      <Row style={{marginTop: 30}}>
        <Col>
          <h5>Q: {question.question_body}</h5>
        </Col>
        <Col>
          <span style={qHelpfulStyle}>
            Helpful? Yes
            ({question.question_helpfulness})</span>
        </Col>
      </Row>

      <ul style={{listStyleType: "none", margin: 0, padding: 0, display: 'inline'}}> A:
        {answers.map((answer) =>
          <Answers key={answer.id}
            answer={answer}
          />,
        )}
      </ul>

    </>

  );
}

export default QABox;
