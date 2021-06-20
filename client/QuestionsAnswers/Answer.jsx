import React from 'react';
import moment from 'moment';
import {Row, Col, Container} from 'react-bootstrap';
import {answerBody, qaMetaStyle} from './QAstyle.jsx';
import PropTypes from 'prop-types';
import AnswerHelpfulness from './AnswerHelpfulness.jsx';
import ReportAnswer from './ReportAnswer.jsx';

function Answer({answer}) {
  return (
    <Container>
      <Row>
        <Col
          lg={9}
          style={answerBody}>
          {answer.body}</Col>
        <Col></Col>
      </Row>
      <Row md={4} xl={4} lg={5}>
        <Col style={qaMetaStyle}>{`by ${answer.answerer_name},
        ${moment(answer.date).format('MMMM Do YYYY')}`}</Col>
        <Col>
          <AnswerHelpfulness helpfulCount={answer.helpfulness}/>
          <ReportAnswer key={answer.id}/>
        </Col>
      </Row>
    </Container>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
};
export default Answer;
