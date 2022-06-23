import { Carousel, Container, Row } from "react-bootstrap";
import AddressItem from "./carousel-items/AddressItem";
import OrderItem from "./carousel-items/OrderItem";

const OrderCarousel = ({ index }: any) => {
  return (
    <>
      <Carousel
        style={{ marginBottom: 20, height: 320, overflow: "auto" }}
        activeIndex={index}
        interval={null}
        indicators={false}
      >
        <Carousel.Item>
          <Container>
            <OrderItem />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <AddressItem />
        </Carousel.Item>
      </Carousel>
      <Row></Row>
    </>
  );
};

export default OrderCarousel;
