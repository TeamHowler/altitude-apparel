import React from 'react';
import Answers from './Answers.jsx';
import {Row, Col, Image, FormControl} from 'react-bootstrap';
import {ProductContext} from '../context.js';
import {qHelpfulStyle, ulStyle} from './QAstyle.jsx';


function QuestionsList({question}) {
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

      <ul style={ulStyle}> A:
        {answers.map((answer) =>
          <Answers key={answer.id}
            answer={answer}
          />,
        )}
      </ul>

    </>

  );
}

export default QuestionsList;
