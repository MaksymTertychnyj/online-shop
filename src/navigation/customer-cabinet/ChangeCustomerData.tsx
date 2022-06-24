import { MutableRefObject, useContext, useRef, useState } from "react";
import { Button, Form, Offcanvas, Row } from "react-bootstrap";
import CustomerService from "../../api-service/customer-service/CustomerService";
import AuthManager from "../../components/auth/AuthManager";
import CustomerChangeModel from "../../models/user/CustomerChangeModel";
import CustomerModel from "../../models/user/CustomerModel";
import LoginProviderContext from "../../providers/login-provider/LoginProviderContext";
import Styles from "./Styles";

export interface Props {
  show: boolean;
  setShow: (state: boolean) => void;
  user: CustomerModel;
}

const ChangeCustomerData = (props: Props) => {
  const inputFirstName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputLastName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputEmail = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPhoneNumber = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const [phoneValue, setPhoneValue] = useState("");
  const { setIsLogged } = useContext(LoginProviderContext);

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

  const onChangeHandler = () => {
    let user: CustomerChangeModel = {
      firstName: inputFirstName.current.value
        ? inputFirstName.current.value
        : props.user?.firstName!,
      lastName: inputLastName.current.value ? inputLastName.current.value : props.user?.lastName!,
      email: inputEmail.current.value ? inputEmail.current.value : props.user?.email!,
      phoneNumber: phoneValue ? phoneValue : props.user?.phoneNumber!,
      address: "",
    };

    CustomerService.updateCustomer(user).then(() => {
      setIsLogged(false);
      AuthManager.signOutAsync();
      props.setShow(false);
    });
  };

  return (
    <Offcanvas
      show={props.show}
      onHide={() => props.setShow(false)}
      className="navbar justify-content-center"
      style={{ width: 300 }}
    >
      <Offcanvas.Title>
        <Row>Change information of </Row>
      </Offcanvas.Title>

      <Offcanvas.Body>
        <Form>
          <Form.Group>
            <Form.Label className={Styles.label}>first name</Form.Label>
            <Form.Control
              className={Styles.input}
              ref={inputFirstName}
              type="text"
              placeholder={props.user?.firstName}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label className={Styles.label}>last name</Form.Label>
            <Form.Control
              className={Styles.input}
              ref={inputLastName}
              type="text"
              placeholder={props.user?.lastName}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label className={Styles.label}>email</Form.Label>
            <Form.Control
              className={Styles.input}
              ref={inputEmail}
              type="email"
              placeholder={props.user?.email}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label className={Styles.label}>phone number</Form.Label>
            <Form.Control
              className={Styles.input}
              ref={inputPhoneNumber}
              type="number"
              placeholder={props.user?.phoneNumber}
              onChange={onChangePhoneNumber}
              value={phoneValue}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Button size="sm" variant="success" onClick={onChangeHandler}>
              Ok
            </Button>
          </Form.Group>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ChangeCustomerData;
