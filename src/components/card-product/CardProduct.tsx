import { Button, Card, CardImg } from "react-bootstrap";
import { CardProductProps } from "./CardProductProps";

const CardProduct = (props: CardProductProps) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imagePath} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">{props.textButton}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProduct;
