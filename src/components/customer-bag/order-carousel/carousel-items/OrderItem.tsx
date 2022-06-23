import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomerBagContext from "../../../../providers/customer-bag-provider/CustomerBagContext";
import CustomerProductItem from "../../CustomerProductItem";
import Styles from "../../Styles";

const OrderItem = () => {
  const { customerProducts } = useContext(CustomerBagContext);

  return (
    <>
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
        {customerProducts.map((p, i) => {
          console.log(p.product);
          return <CustomerProductItem key={i} product={p} index={i + 1} />;
        })}
      </Row>
    </>
  );
};

export default OrderItem;
