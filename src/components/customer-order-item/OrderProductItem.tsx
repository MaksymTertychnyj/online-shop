import { Col, Container, Row } from "react-bootstrap";
import ProductModel from "../../models/ProductModel";

export interface OrderProductItemProps {
  product: ProductModel;
  index: number;
}

const OrderProductItem = (props: OrderProductItemProps) => {
  const getSum = (): number => {
    return props.product!.price * props.product!.quantity;
  };

  return (
    <Container>
      <Row style={{ textAlign: "center", fontSize: 13 }}>
        <Col className="border" sm={2}>
          {props.index}
        </Col>
        <Col className="border" sm={3}>
          {props.product?.name}
        </Col>
        <Col className="border" sm={2}>
          {props.product?.price}
        </Col>
        <Col className="border" sm={2}>
          {props.product?.quantity}
        </Col>
        <Col className="border" sm={3}>
          {getSum()}
        </Col>
      </Row>
    </Container>
  );
};

export default OrderProductItem;
