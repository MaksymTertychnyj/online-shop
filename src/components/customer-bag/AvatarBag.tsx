import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import CustomerModel from "../../models/user/CustomerModel";
import AuthManager from "../auth/AuthManager";
import Styles from "./Styles";

const AvatarBag = () => {
  const [user, setUser] = useState<CustomerModel | null>(null);

  useEffect(() => {
    AuthManager.getUser().then((resp) => {
      if (resp) {
        let u: any = JSON.parse(resp);
        setUser(u["customer"]);
      }
    });
  }, []);

  return (
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
  );
};

export default AvatarBag;
