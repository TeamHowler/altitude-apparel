import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {grey10} from './QAstyle.jsx';


function AddAnswerModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={grey10}
        className="shadow-none"
        variant="link"
        onClick={handleShow}>Add Answer
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
          future content for  add answer modal
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

export default AddAnswerModal;
