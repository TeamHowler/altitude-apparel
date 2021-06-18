/* eslint-disable no-tabs */
import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {mL23} from './QAstyle.jsx';


function AddQuestionModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={mL23}
        className="shadow-none"
        variant="outline-dark"
        onClick={handleShow}>Add a Question
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					future content for  add question modal
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
						Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddQuestionModal;
