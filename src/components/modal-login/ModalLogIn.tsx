import { Form, Modal, ModalBody, ModalTitle } from "react-bootstrap";
import { ModalLoginProps } from "./ModalLogInProps";

const ModalLogIn = (props: ModalLoginProps) => {
  const closeHandler = () => {
    props.closeModal(false);
  };

  return (
    <Modal show={props.visible} onHide={closeHandler}>
      <Modal.Header closeButton>
        <ModalTitle>Log In</ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="Enter your login please ..." />
          </Form.Group>
          <Form.Group controlId="fromBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password please ..." />
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogIn;
