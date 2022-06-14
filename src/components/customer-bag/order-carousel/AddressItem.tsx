import { MutableRefObject, useEffect, useRef } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Styles from "../Styles";
import credentials from "../../../credentials.json";

const AddressItem = () => {
  const inputCountry = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputRegion = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputCity = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputPlace = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    console.log(credentials["key"]);
  }, []);

  return (
    <>
      <Row>
        <Container>
          <Card border="info" className={Styles.container} style={{ paddingBottom: 10 }}>
            <Row style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>Address</Row>

            <Form>
              <Form.Group>
                <Row>
                  <Col sm={6}>
                    <Form.Label className={Styles.label}>Country</Form.Label>
                    <Form.Control ref={inputCountry} className={Styles.input} />
                  </Col>
                  <Col sm={6}>
                    <Form.Label className={Styles.label}>Region</Form.Label>
                    <Form.Control ref={inputRegion} className={Styles.input} />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm={6}>
                    <Form.Label className={Styles.label}>City</Form.Label>
                    <Form.Control ref={inputCity} className={Styles.input} />
                  </Col>
                  <Col sm={6}>
                    <Form.Label className={Styles.label}>Place</Form.Label>
                    <Form.Control ref={inputPlace} className={Styles.input} />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Card>
        </Container>
      </Row>
    </>
  );
};

export default AddressItem;
