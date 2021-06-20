import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {grey10} from './QAstyle.jsx';
import PropTypes from 'prop-types';

function ReportAnswer({helpfulCount}) {
  const [disable, setDisable] = useState(false);
	const [reportedText, setReportedText] = useState('Report')

  return (
    <>
      <Button
        className="shadow-none"
        variant="link"
        style={grey10}
        disabled={disable}
        onClick={() => {
          setDisable(true);
					setReportedText('Reported!')
        } }
      > {reportedText}
      </Button>
    </>
  );
}

ReportAnswer.propTypes = {
  helpfulCount: PropTypes.number,
};


export default ReportAnswer;
