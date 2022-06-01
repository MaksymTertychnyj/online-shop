import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../../components/card-product/CardProduct";

const Home = () => {
  return (
    <>
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <CardProduct
              imagePath={require("../../assets/images/headerBackground.jpg")}
              title={"Monitor"}
              text={"Philips"}
              textButton={"Buy"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
