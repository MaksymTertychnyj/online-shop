import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Modal, Row } from "react-bootstrap";
import LoginProviderContext from "../../providers/login-provider/LoginProviderContext";
import { ModalRegisterProps } from "./ModalRegisterProps";
import Styles from "./Styles";
import PhoneInput from "react-phone-number-input/input";
import { formatPhoneNumber, formatPhoneNumberIntl } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import LoginService from "../../api-service/login-service/LoginService";
import CustomerModel from "../../models/user/CustomerModel";
import AuthManager from "../auth/AuthManager";
import { StatusCodes } from "../../constants/StatusCodes";

const ModalRegister = (props: ModalRegisterProps) => {
  const { setIsLogged } = useContext(LoginProviderContext);
  const inputFirstName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputLastName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputEmail = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPhoneNumber = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputAddress = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputLogin = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPassword = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputConfirmPassword = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const [phoneValue, setPhoneValue] = useState("");

  const onChangePhoneNumber = () => {
    if (inputPhoneNumber.current.value.length < 11) {
      if (inputPhoneNumber.current.value.length === 10) {
        let ph: string = inputPhoneNumber.current.value.toString();
        ph =
          `+38` +
          `(` +
          ph.substring(0, 3) +
          `)` +
          `-` +
          ph.substring(3, 6) +
          `-` +
          ph.substring(6, 8) +
          `-` +
          ph.substring(8, 10);

        console.log(ph);
        setPhoneValue(ph);
      }
      setPhoneValue(inputPhoneNumber.current.value);
    }
  };

  const closeHandler = () => {
    props.closeModal(false);
  };

  const registerHandler = () => {
    if (inputPassword.current.value === inputConfirmPassword.current.value) {
      let customer: CustomerModel = {
        firstName: inputFirstName.current.value,
        lastName: inputLastName.current.value,
        email: inputEmail.current.value,
        phoneNumber: phoneValue,
        address: "",
        login: inputLogin.current.value,
        password: inputPassword.current.value,
      };
      LoginService.registerCustomer(customer).then((res) => {
        if (res.status === StatusCodes.OK) {
          AuthManager.signInAsync(res.data);
          setIsLogged(true);
          closeHandler();
        }
      });
    }
  };

  return (
    <Modal show={props.visible} onHide={closeHandler}>
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={Styles.label}>first name</Form.Label>
                  <Form.Control
                    className={Styles.input}
                    ref={inputFirstName}
                    type="text"
                    placeholder="enter first name ..."
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={Styles.label}>last name</Form.Label>
                  <Form.Control
                    className={Styles.input}
                    ref={inputLastName}
                    type="text"
                    placeholder="enter last name ..."
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={Styles.label}>email</Form.Label>
                  <Form.Control
                    className={Styles.input}
                    ref={inputEmail}
                    type="email"
                    placeholder="enter email ..."
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={Styles.label}>phone number</Form.Label>
                  <Form.Control
                    className={Styles.input}
                    ref={inputPhoneNumber}
                    type="number"
                    placeholder="enter your phone number"
                    onChange={onChangePhoneNumber}
                    value={phoneValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label className={Styles.label}>login</Form.Label>
              <Form.Control
                className={Styles.input}
                ref={inputLogin}
                type="text"
                placeholder="enter login ..."
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={Styles.label}>password</Form.Label>
                  <Form.Control
                    className={Styles.input}
                    ref={inputPassword}
                    type="password"
                    placeholder="enter password ..."
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={Styles.label}>confirm password</Form.Label>
                  <Form.Control
                    className={Styles.input}
                    ref={inputConfirmPassword}
                    type="password"
                    placeholder="enter password again ..."
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className={Styles.footer}>
          <Button variant="primary" size="sm" onClick={registerHandler}>
            Register
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default ModalRegister;
