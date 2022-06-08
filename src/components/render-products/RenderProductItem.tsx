import ProductModel from "../../models/ProductModel";
import { RenderProductItemProps } from "./RenderProductItemProps";
import { Card, Col, OverlayTrigger, Popover, Row } from "react-bootstrap";
import ImageService from "../../api-service/imageService/ImageService";
import TargetTypes from "../../models/TargetTypes";
import { Fragment, useContext, useEffect, useState } from "react";
import Styles from "./Styles";
import DataModel from "../../models/DataModel";
import CustomerBagContext from "../customer-bag/CustomerBagContext";

const RenderProductItem = (prop: RenderProductItemProps) => {
  const [imagePath, setImagePath] = useState("");
  const [properties] = useState<DataModel[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const [productId, setProductId] = useState(0);
  const { customerProducts, customerAmount, setCustomerAmount } = useContext(CustomerBagContext);
  let jsonProperties: any = {};

  const addProductToBag = () => {
    setCustomerAmount(customerAmount + prop.product!.price);

    if (prop.product) {
      customerProducts.push({
        id: prop.product.id,
        name: prop.product.name,
        jsonParameters: prop.product.jsonParameters,
        quantity: 1,
        price: prop.product.price,
        categoryId: prop.product.categoryId,
      });
    }
    setIsAdded(true);
    setProductId(prop.product!.id);
  };

  const renderPopoverButton = (props: any) => {
    if (isAdded && productId === prop.product?.id) {
      return (
        <Popover className={Styles.tooltip} {...props}>
          <Row style={{ marginLeft: 5, marginRight: 5 }}>was added to bag</Row>
        </Popover>
      );
    }
    return (
      <Popover className={Styles.tooltip} {...props}>
        <Row style={{ marginLeft: 5, marginRight: 5 }}> add to bag </Row>
      </Popover>
    );
  };

  const renderPopoverParameters = (props: any) => {
    return (
      <Popover className={Styles.popover} {...props}>
        {properties.map((p, i) => {
          return (
            <Row>
              <Col md={8} style={{ fontWeight: "bold" }}>
                {p?.name}:
              </Col>
              <Col md={4}>{p?.value}</Col>
            </Row>
          );
        })}
      </Popover>
    );
  };

  useEffect(() => {
    ImageService.getImage(prop.product?.id!, TargetTypes.products).then((resp) => {
      setImagePath(resp.data);

      properties.length = 0;
      jsonProperties = JSON.parse(prop.product!.jsonParameters);
      for (let key in jsonProperties) {
        properties.push({ name: key, value: jsonProperties[key] });
      }
    });
  }, [prop.product]);

  return (
    <>
      <Card border="warning" style={{ marginTop: 25, marginLeft: 20 }}>
        <OverlayTrigger
          placement="right"
          delay={{ show: 350, hide: 400 }}
          overlay={renderPopoverParameters}
        >
          <Card.Img className={Styles.image} variant="top" src={imagePath} />
        </OverlayTrigger>
        <Card.Body className={Styles.body}>
          <Card.Title>
            <p style={{ fontSize: 13, textAlign: "center" }}>{prop.product?.name}</p>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Row className="justify-content-md-center">
            <Col md="auto" className={Styles.buttonLeftSide}>
              <Card.Text className={Styles.textButton}>{prop.product?.price}</Card.Text>
            </Col>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderPopoverButton}
            >
              <Col md="auto" className={Styles.buttonRightSide} onClick={() => addProductToBag()}>
                <Card.Text className={Styles.textButton}>Buy</Card.Text>
              </Col>
            </OverlayTrigger>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default RenderProductItem;
