import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ProductModel from "../../models/ProductModel";
import CustomerBagContext from "../../providers/customer-bag-provider/CustomerBagContext";

export interface CustomerProductProps {
  product: ProductModel;
  index: number;
}

const CustomerProductItem = (props: CustomerProductProps) => {
  const inputQuantity = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const { customerAmount, setCustomerAmount } = useContext(CustomerBagContext);

  const getAmount = (): number => {
    return props.product!.price * props.product!.quantity;
  };

  const onChangeQuantity = () => {
    let q = Number.parseInt(inputQuantity.current.value);
    if (q < 0) {
      inputQuantity.current.value = "0";
    } else {
      setCustomerAmount(customerAmount + (q - props.product!.quantity) * props.product!.price);
      props.product!.quantity = q;
    }
  };

  useEffect(() => {
    inputQuantity.current.value = props.product!.quantity.toString();
  }, []);

  useEffect(() => {}, [customerAmount]);

  return (
    <Container>
      <Row>
        <Col className="border" style={{ textAlign: "center", fontSize: 13 }} sm={2}>
          {props.index}
        </Col>
        <Col className="border" style={{ textAlign: "center", fontSize: 13 }} sm={3}>
          {props.product?.name}
        </Col>
        <Col className="border" style={{ textAlign: "center", fontSize: 13 }} sm={2}>
          {props.product?.price}
        </Col>
        <Col className="border" style={{ textAlign: "center", fontSize: 13 }} sm={2}>
          <Form.Control
            ref={inputQuantity}
            style={{ height: 25, fontSize: 13, border: 0 }}
            type="number"
            placeholder={props.product?.quantity.toString()}
            onChange={onChangeQuantity}
          />
        </Col>
        <Col className="border" style={{ textAlign: "center", fontSize: 13 }} sm={3}>
          {getAmount()}
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerProductItem;
