import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ProductDto } from "../../models/order/ProductDto";
import CustomerBagContext from "../../providers/customer-bag-provider/CustomerBagContext";

export interface CustomerProductProps {
  product: ProductDto;
  index: number;
}

const CustomerProductItem = (props: CustomerProductProps) => {
  const inputQuantity = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const { customerAmount, setCustomerAmount } = useContext(CustomerBagContext);

  const getAmount = (): number => {
    return props.product.product!.price * props.product.product!.quantity;
  };

  const onChangeQuantity = () => {
    if (inputQuantity.current.value) {
      let q = Number.parseInt(inputQuantity.current.value);
      if (q < 0) {
        inputQuantity.current.value = "0";
        q = Number.parseInt(inputQuantity.current.value);
      } else {
        if (q > props.product.maxQuantity) {
          inputQuantity.current.value = props.product.maxQuantity.toString();
          q = Number.parseInt(inputQuantity.current.value);
        }
        setCustomerAmount(
          customerAmount + (q - props.product.product!.quantity) * props.product.product!.price
        );
        props.product.product!.quantity = q;
      }
    }
  };

  useEffect(() => {
    inputQuantity.current.value = props.product.product!.quantity.toString();
  }, []);

  useEffect(() => {}, [customerAmount]);

  return (
    <Container>
      <Row style={{ textAlign: "center", fontSize: 13 }}>
        <Col className="border" sm={2}>
          {props.index}
        </Col>
        <Col className="border" sm={3}>
          {props.product.product?.name}
        </Col>
        <Col className="border" sm={2}>
          {props.product.product?.price}
        </Col>
        <Col className="border" sm={2}>
          <Form.Control
            ref={inputQuantity}
            style={{ height: 25, fontSize: 13, border: 0 }}
            type="number"
            placeholder={props.product.product?.quantity.toString()}
            onChange={onChangeQuantity}
          />
        </Col>
        <Col className="border" sm={3}>
          {getAmount()}
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerProductItem;
