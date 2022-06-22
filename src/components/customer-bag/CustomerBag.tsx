import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomerBagContext from "../../providers/customer-bag-provider/CustomerBagContext";
import Styles from "./Styles";
import { useNavigate } from "react-router-dom";
import OrderCarousel from "./order-carousel/OrderCarousel";
import AvatarBag from "./AvatarBag";
import OrderModel from "../../models/order/OrderModel";
import OrderStatus from "../../models/OrderStatus";
import Customer from "../../models/user/CustomerModel";
import AuthManager from "../auth/AuthManager";
import OrderService from "../../api-service/order-service/OrderService";

const CustomerBag = () => {
  const {
    customerAmount,
    addressDescription,
    customerProducts,
    orderAddress,
    setAddressDescription,
    setCustomerProducts,
    setCustomerAmount,
  } = useContext(CustomerBagContext);
  const [disabledButtonPut, setDisabledButtonPut] = useState(true);
  const [disabledButtonNext, setDisabledButtonNext] = useState(false);
  const navigate = useNavigate();
  const [indexStep, setIndexStep] = useState(0);
  const [user, setUser] = useState<Customer | null>(null);

  const onBack = () => {
    if (indexStep === 0) {
      navigate(-1);
    } else {
      setIndexStep(indexStep - 1);
    }
  };

  const onNext = () => {
    if (indexStep !== 1) {
      setIndexStep(indexStep + 1);
    }
  };

  const putItAnOrder = () => {
    let order: OrderModel = {
      dateRegister: new Date(),
      status: OrderStatus.negotiation,
      amount: customerAmount,
      orderAddress: orderAddress,
      customerLogin: user?.login!,
      products: customerProducts,
    };

    OrderService.confirmOrder(order)
      .then(() => {
        setCustomerProducts([]);
        setAddressDescription("");
        setCustomerAmount(0);
        setDisabledButtonPut(true);
        alert("Your order was confirmed.");
        if (indexStep === 0) {
          navigate(-1);
        } else {
          setIndexStep(indexStep - 2);
        }
      })
      .catch(() => alert("Your order was not confirmed."));
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
    if (customerAmount > 0 && indexStep === 1) {
      setDisabledButtonNext(true);
      addressDescription ? setDisabledButtonPut(false) : setDisabledButtonPut(true);
    } else {
      customerAmount > 0 ? setDisabledButtonNext(false) : setDisabledButtonNext(true);
    }
  }, [customerAmount, indexStep, addressDescription]);

  return (
    <Container>
      <br />
      <Row>
        <Col sm={3}>
          <AvatarBag />
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
          <Row style={{ paddingTop: 15, paddingBottom: 20 }}>
            <Col sm={4}>
              <Button size="sm" variant="info" onClick={onBack}>
                back
              </Button>
            </Col>
            <Col sm={4}>
              <Button
                size="sm"
                variant={"success"}
                disabled={disabledButtonPut}
                onClick={putItAnOrder}
              >
                Put in
              </Button>
            </Col>
            <Col sm={4}>
              <Button size="sm" variant={"info"} disabled={disabledButtonNext} onClick={onNext}>
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
