import { useContext, useRef, useState } from "react";
import { Button, Form, Modal, ModalTitle } from "react-bootstrap";
import LoginService from "../../api-service/login-service/LoginService";
import { StatusCodes } from "../../constants/StatusCodes";
import CustomerAuthenticateRequest from "../../models/user/CustomerAuthenticateRequest";
import LoginProviderContext from "../../providers/login-provider/LoginProviderContext";
import AuthManager from "../auth/AuthManager";
import { ModalLoginProps } from "./ModalLogInProps";

const ModalLogIn = (props: ModalLoginProps) => {
  const { setIsLogged } = useContext(LoginProviderContext);
  const [message, setMessage] = useState<string>("");
  const inputLogin = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const inputPassword = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const closeHandler = () => {
    setMessage("");
    props.closeModal(false);
  };

  const loginHandler = () => {
    let request: CustomerAuthenticateRequest = {
      Login: inputLogin.current.value,
      Password: inputPassword.current.value,
    };
    LoginService.loginCustomer(request)
      .then((resp) => {
        if (resp.status === StatusCodes.OK) {
          AuthManager.signInAsync(resp.data);
          setIsLogged(true);
          setMessage("");
          closeHandler();
        }
      })
      .catch((reason) => {
        if (reason.code === "ERR_BAD_REQUEST") {
          setMessage(reason.response.data["message"]);
        }
        if (reason.code === "ERR_NETWORK") {
          setMessage(reason.message);
        }
      });
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
            <Form.Control ref={inputLogin} type="text" placeholder="Enter your login please ..." />
          </Form.Group>
          <Form.Group controlId="fromBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={inputPassword}
              type="password"
              placeholder="Enter your password please ..."
            />
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Form.Group>
            <Form.Text style={{ color: "red" }}>{message}</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Form.Group>
          <Button onClick={loginHandler} variant="primary">
            Log In
          </Button>
        </Form.Group>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogIn;
