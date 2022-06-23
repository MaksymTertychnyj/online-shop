import { useContext, useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import OrderService from "../../api-service/order-service/OrderService";
import AuthManager from "../../components/auth/AuthManager";
import AvatarBag from "../../components/customer-bag/AvatarBag";
import CustomerOrderItem from "../../components/customer-order-item/CustomerOrderItem";
import OrderModel from "../../models/order/OrderModel";
import Customer from "../../models/user/CustomerModel";
import LoginProviderContext from "../../providers/login-provider/LoginProviderContext";
import ChangeCustomerData from "./ChangeCustomerData";
import Styles from "./Styles";

const CustomerCabinet = () => {
  const [orders, setOrders] = useState<OrderModel[]>([]);
  const [user, setUser] = useState<Customer | null>(null);
  const { isLogged } = useContext(LoginProviderContext);
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  useEffect(() => {
    AuthManager.getUser().then((resp) => {
      if (resp) {
        let u: any = JSON.parse(resp);
        setUser(u["customer"]);
      } else {
        setOrders([]);
      }
    });
  }, [isLogged]);

  useEffect(() => {
    if (user) {
      OrderService.getOrdersByCustomer(user.login)
        .then((res) => {
          if (res) {
            setOrders(res.data);
          }
        })
        .catch(() => alert("error"));
    }
  }, [user]);

  return (
    <Container className={Styles.container}>
      <Row>
        <Col sm={3}>
          <Row>
            <AvatarBag />
          </Row>
          <Row className="navbar justify-content-center">
            <Button
              variant="warning"
              className={Styles.buttonChange}
              size="sm"
              onClick={() => setShowLeftMenu(true)}
            >
              Change
            </Button>
          </Row>
        </Col>
        <Col sm={6}>
          <Accordion>
            {orders.map((o, index) => {
              return <CustomerOrderItem key={index} order={o} evKey={index} />;
            })}
          </Accordion>
        </Col>
      </Row>
      <ChangeCustomerData show={showLeftMenu} setShow={setShowLeftMenu} user={user} />
    </Container>
  );
};

export default CustomerCabinet;
