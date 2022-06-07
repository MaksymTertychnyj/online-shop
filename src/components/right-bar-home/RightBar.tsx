import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import HomeContext from "../../navigation/home/HomeContext";
import Styles from "./Styles";

const RightBar = () => {
  const {
    searchPriceTo,
    setSearchPriceUp,
    setSearchPriceTo,
    setSearchName,
    searchPriceUp,
    currentProduct,
    maxPrice,
  } = useContext(HomeContext);
  const inputUp = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputTo = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const inputName = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const onChangePriceHandler = () => {
    setSearchPriceUp(inputUp.current.value ? Number.parseInt(inputUp.current.value) : 0);
    if (inputTo.current.value) {
      setSearchPriceTo(Number.parseInt(inputTo.current.value));
    }
  };

  useEffect(() => {}, [maxPrice]);

  return (
    <Col sm={2}>
      <Row className={Styles.container}>
        <Row className="border">
          <Col className={Styles.headerText}>Price</Col>
          <Row>
            <Form>
              <FormGroup>
                <Row>
                  <Col>
                    <FormLabel className={Styles.formLabel}>from</FormLabel>
                    <FormControl
                      ref={inputUp}
                      className={Styles.formInput}
                      type="text"
                      placeholder="0"
                    />

                    <FormLabel className={Styles.formLabel}>to</FormLabel>
                    <FormControl
                      ref={inputTo}
                      className={Styles.formInput}
                      type="text"
                      placeholder={maxPrice.toString()}
                    />
                    <br />
                    <FormLabel className={Styles.formLabel}>Назва</FormLabel>
                    <FormControl
                      ref={inputName}
                      className={Styles.formInput}
                      type="text"
                      placeholder="enter name"
                      onChange={() => setSearchName(inputName.current.value)}
                    />
                    <div className="text-center">
                      <Button
                        size="sm"
                        variant="success"
                        className={Styles.button}
                        onClick={onChangePriceHandler}
                      >
                        Пошук
                      </Button>
                    </div>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Row>
        </Row>
        <Row></Row>
      </Row>
    </Col>
  );
};

export default RightBar;
