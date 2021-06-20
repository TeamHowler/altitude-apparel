import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {Container, Button, Row} from 'react-bootstrap';
import {ulStyle, pL17, mL25} from './QAstyle.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';

function QuestionsList({questionList}) {
  const sortedQuestions = questionList.sort(
      ({question_helpfulness: a},
          {question_helpfulness: b}) => b-a);
  const firstTwoQuestions = sortedQuestions.slice(0, 2);
  const [moreQuestions, setMoreQuestions] = useState(false);

  let questions;

  moreQuestions ? questions = sortedQuestions :
  questions = firstTwoQuestions;


  return (
    <Container style={ulStyle}>
      {questions.map((question) =>
        <Question
          key={question.question_id}
          question={question}
        />,
      )}
      <Row style={pL17}>
        <Button
          style={mL25}
          size='sm'
          className="shadow-none"
          variant="outline-dark"
          onClick={() => setMoreQuestions(!moreQuestions)}
        >Load More Questions</Button>
        <AddQuestionModal />
      </Row>

    </Container>
  );
}

QuestionsList.propTypes = {
  questionList: PropTypes.array,
};

export default QuestionsList;
