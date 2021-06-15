import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';
import {ulStyle} from './QAstyle.jsx';

function QuestionsList({questions}) {
  return (
    <ul style={ulStyle}>
      {questions.map((question) =>
        <Question
          key={question.question_id}
          question={question}
        />,
      )}
    </ul>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;


// const answers = Object.values(question.answers);
// const firstAnswer = answers[0];
{/* <ul style={ulStyle}> A:
        {answers.map((answer) =>
          <Answers key={answer.id}
            answer={answer}
          />,
        )}
      </ul> */}
