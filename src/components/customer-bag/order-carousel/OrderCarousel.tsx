import { Carousel, Container, Row } from "react-bootstrap";
import AddressItem from "./AddressItem";
import OrderItem from "./OrderItem";

const OrderCarousel = ({ index }: any) => {
  return (
    <>
      <Carousel style={{ marginTop: 20 }} activeIndex={index} interval={null} indicators={false}>
        <Carousel.Item>
          <Container>
            <OrderItem />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <AddressItem />
        </Carousel.Item>
        <Carousel.Item>
          <p>choose variant pay</p>
        </Carousel.Item>
      </Carousel>
      <Row></Row>
    </>
  );
};

export default OrderCarousel;
