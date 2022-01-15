import React from "react";
import { Button, Modal } from "react-bootstrap";
const MessageModal = ({ show, handleClose, message }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>        
          <Modal.Title style={{ color: "red" }}>NOTICE</Modal.Title>     
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>{message}</Modal.Body>
    </Modal>
  );
};

export default MessageModal;
