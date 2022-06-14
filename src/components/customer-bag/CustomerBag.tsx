import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CustomerModel from "../../models/user/CustomerModel";
import AuthManager from "../auth/AuthManager";
import CustomerBagContext from "./CustomerBagContext";
import Styles from "./Styles";
import { useNavigate } from "react-router-dom";
import OrderCarousel from "./order-carousel/OrderCarousel";

const CustomerBag = () => {
  const [user, setUser] = useState<CustomerModel | null>(null);
  const { customerAmount } = useContext(CustomerBagContext);
  const [disabledButtonPut, setDisabledButtonPut] = useState(true);
  const [disabledButtonNext, setDisabledButtonNext] = useState(false);
  const navigate = useNavigate();
  const [indexStep, setIndexStep] = useState(0);

  /* const putItAnOrder = () => {
    let order: OrderModel = {
      id: 0,
      orderStatus: OrderStatus.registered,
      orderAddress: {
        id: 0,
        country: inputCountry.current.value,
        region: inputRegion.current.value,
        city: inputCity.current.value,
        place: inputPlace.current.value,
      },
      customerLogin: user!.login,
      products: customerProducts,
    };
    OrderService.confirmOrder(order).then((res) => {
      if (res.status === StatusCodes.OK) {
        alert("Your order was registered!");
        navigate(-1);
        setCustomerProducts([]);
        setCustomerAmount(0);
      } else {
        alert("Unfortunately your order was not registered");
      }
    });
  }; */

  const onBack = () => {
    if (indexStep === 0) {
      navigate(-1);
    } else {
      setIndexStep(indexStep - 1);
    }
  };

  const onNext = () => {
    if (indexStep !== 2) {
      setIndexStep(indexStep + 1);
    }
  };

  useEffect(() => {
    AuthManager.getUser().then((resp) => {
      if (resp) {
        let u: any = JSON.parse(resp);
        setUser(u["customer"]);
      }
    });
  }, []);

  useEffect(() => {
    if (customerAmount > 0 && indexStep === 2) {
      setDisabledButtonPut(false);
      setDisabledButtonNext(true);
    } else {
      setDisabledButtonPut(true);
      customerAmount > 0 ? setDisabledButtonNext(false) : setDisabledButtonNext(true);
    }
  }, [customerAmount, indexStep]);

  return (
    <Container>
      <br />
      <Row>
        <Col sm={3}>
          <Card border="warning" className={Styles.container}>
            <Card.Img
              className={Styles.image}
              variant="top"
              src={require("../../assets/images/icons/user.png")}
            />
            <Card.Body className={Styles.body}>
              <p>{user?.login}</p>
              <Row style={{ marginTop: 5 }}>
                <Col>
                  First name:
                  <Row className={Styles.bodyItem}>{user?.firstName}</Row>
                </Col>
              </Row>
              <Row style={{ marginTop: 5 }}>
                <Col>
                  Last name: <Row className={Styles.bodyItem}>{user?.lastName}</Row>
                </Col>
              </Row>
              <Row style={{ marginTop: 5 }}>
                <Col>
                  Email: <Row className={Styles.bodyItem}>{user?.email}</Row>
                </Col>
              </Row>
              <Row style={{ marginTop: 5 }}>
                <Col>
                  Phone number: <Row className={Styles.bodyItem}>{user?.phoneNumber}</Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} style={{ alignContent: "center" }}>
          <OrderCarousel index={indexStep} />
          <Row style={{ paddingTop: 10 }}>
            <Col sm={1} className={Styles.textHeader}>
              All:
            </Col>
            <Col sm={4} style={{ fontSize: 13, textAlign: "start" }}>
              {customerAmount}
              <label className={Styles.textHeader} style={{ paddingLeft: 5 }}>
                UAH
              </label>
            </Col>
          </Row>
          <Row style={{ paddingTop: 15 }}>
            <Col sm={4}>
              <Button size="sm" variant="secondary" onClick={onBack}>
                back
              </Button>
            </Col>
            <Col sm={4}>
              <Button
                size="sm"
                variant={"success"}
                disabled={disabledButtonPut}
                //onClick={putItAnOrder}
              >
                Put in
              </Button>
            </Col>
            <Col sm={4}>
              <Button size="sm" variant={"success"} disabled={disabledButtonNext} onClick={onNext}>
                next
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerBag;
