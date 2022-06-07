import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import User from "../../models/user/UserModel";
import AuthManager from "../auth/AuthManager";
import CustomerBagContext from "./CustomerBagContext";
import CustomerProductItem from "./CustomerProductItem";
import Styles from "./Styles";

const CustomerBag = () => {
  const [user, setUser] = useState<User | null>(null);
  const { customerProducts, customerAmount } = useContext(CustomerBagContext);

  useEffect(() => {
    AuthManager.getUser().then((resp) => setUser(JSON.parse(resp!)));
  }, []);

  useEffect(() => {}, [customerAmount]);

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
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} style={{ alignContent: "center" }}>
          <Row>
            <Container>
              <Row className={Styles.textHeader}>
                <Col>Your order</Col>
              </Row>
              <Row style={{ paddingTop: 10 }}>
                <Col
                  className="border"
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                  sm={2}
                >
                  №
                </Col>
                <Col
                  className="border"
                  sm={3}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Name
                </Col>
                <Col
                  className="border"
                  sm={2}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Price
                </Col>
                <Col
                  className="border"
                  sm={2}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Quantity
                </Col>
                <Col
                  className="border"
                  sm={3}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: "bold" }}
                >
                  Amount
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
            {customerProducts.map((p, i) => {
              return <CustomerProductItem key={i} product={p} index={i + 1} />;
            })}
          </Row>
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
        </Col>
        <Col sm={3}></Col>
      </Row>
    </Container>
  );
};

export default CustomerBag;
