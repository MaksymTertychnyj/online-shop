import { useEffect, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap/";
import OrderStatus from "../../models/OrderStatus";
import ProductModel from "../../models/ProductModel";
import { OrderItemProps } from "./OrderItemProps";
import OrderProductItem from "./OrderProductItem";
import Styles from "./Styles";

const CustomerOrderItem = (props: OrderItemProps) => {
  const [statusColor, setColor] = useState("");

  useEffect(() => {
    switch (props.order?.status) {
      case 1:
        setColor("red");
        break;
      case 2:
        setColor("#FFA500");
        break;
      case 3:
        setColor("#2E8B57");
        break;
      case 4:
        setColor("#357EC7");
        break;
      case 5:
        setColor("#FFCBA4");
        break;
      case 6:
        setColor("#C4AEAD");
        break;
      default:
        break;
    }
  }, []);

  return (
    <Accordion.Item eventKey={props.evKey.toString()}>
      <Accordion.Header className={Styles.container}>
        <Col>
          <Row>
            <Col sm={{ span: 2, offset: 1 }}>
              <Row>
                <Col sm={1} className={Styles.label}>
                  №
                </Col>
                <Col sm={3} className={Styles.value}>
                  {props.evKey + 1}
                </Col>
              </Row>
            </Col>
            <Col sm={3} className={Styles.value}>
              {props.order?.dateRegister.toString().slice(0, 10)}
            </Col>

            <Col sm={4}>
              <Row>
                <Col sm={4} className={Styles.label}>
                  status:{" "}
                </Col>
                <Col sm={3} className={Styles.value} style={{ color: statusColor }}>
                  {props.order?.status ? OrderStatus[props.order.status] : 0}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Accordion.Header>
      <Accordion.Body style={{ marginBottom: 10 }}>
        <Row>
          <Row>
            <Container>
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
                  Price, UAH
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
                  Amount, UAH
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
            {props.order?.products.map((p, i) => {
              return <OrderProductItem key={i} product={p as ProductModel} index={i + 1} />;
            })}
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col sm={{ span: 2, offset: 8 }} className={Styles.value}>
              {props.order?.amount} UAH
            </Col>
          </Row>
        </Row>
        <Container>
          <Row style={{ marginTop: 25, fontSize: 13 }}>
            {`
          region: ${props.order?.orderAddress?.region}, 
          city: ${props.order?.orderAddress?.city}, 
          place: ${props.order?.orderAddress?.place}
        `}
          </Row>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default CustomerOrderItem;
