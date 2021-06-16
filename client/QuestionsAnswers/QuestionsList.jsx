import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {Container, Button} from 'react-bootstrap';
import {ulStyle} from './QAstyle.jsx';

function QuestionsList({questions}) {
  const sortedQuestions = questions.sort(
      ({question_helpfulness: a},
          {question_helpfulness: b}) => b-a);
  const firstTwoQuestions = sortedQuestions.slice(0, 2);
  const [moreQuestions, setMoreQuestions] = useState(false);
  let renderQs;

  if (moreQuestions) {
    renderQs = sortedQuestions;
  } else {
    renderQs = firstTwoQuestions;
  }

  return (
    <Container style={ulStyle}>
      {renderQs.map((question) =>
        <Question
          key={question.question_id}
          question={question}
        />,
      )}

      <Button onClick={() => setMoreQuestions(!moreQuestions)}
        variant="outline-secondary">Load More Questions</Button>{' '}
      <Button variant="outline-secondary">Add a Question</Button>
    </Container>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
