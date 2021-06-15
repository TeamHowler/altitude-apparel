import React from 'react';
import moment from 'moment';
import {Row, Col, Container} from 'react-bootstrap';
import {Afont, qaMetaStyle, answerStyle, QAfont} from './QAstyle.jsx';
import PropTypes from 'prop-types';

function Answer({answer}) {
  return (
    <Container>
      <Row>
        <Col lg={12} style={Afont}>{answer.body}</Col>
      </Row>
      <Row>
        <Col style={qaMetaStyle}>{`by ${answer.answerer_name},
        ${moment(answer.date).format('MMMM Do YYYY')}
        | Helpful? Yes (${answer.helpfulness})
        | Report`}
        </Col>
      </Row>
    </Container>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
};
export default Answer;
