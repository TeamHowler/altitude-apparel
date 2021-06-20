import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {grey10} from './QAstyle.jsx';
import PropTypes from 'prop-types';

function AnswerHelpfulness({helpfulCount}) {
  const [count, setCount] = useState(helpfulCount);
  const [disable, setDisable] = useState(false);

  const textCount = `Helpful? Yes (${count})`;

  return (
    <>
      <Button
        className="shadow-none"
        variant="link"
        style={grey10}
        disabled={disable}
        onClick={() => {
          setCount(count + 1); setDisable(true);
        } }
      >{textCount}
      </Button>
    </>
  );
}

AnswerHelpfulness.propTypes = {
  helpfulCount: PropTypes.number,
};


export default AnswerHelpfulness;
