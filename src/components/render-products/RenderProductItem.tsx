import ProductModel from "../../models/ProductModel";
import { RenderProductItemProps } from "./RenderProductItemProps";
import { Button, Card, CardImg, Col, OverlayTrigger, Popover, Row, Tooltip } from "react-bootstrap";
import ImageService from "../../api-service/imageService/ImageService";
import TargetTypes from "../../models/TargetTypes";
import { useContext, useEffect, useState } from "react";
import ImageModel from "../../models/image/ImageModel";
import HomeContext from "../../navigation/home/HomeContext";
import Styles from "./Styles";
import DataModel from "../../models/DataModel";

const RenderProductItem = (prop: RenderProductItemProps) => {
  const [imagePath, setImagePath] = useState("");
  const [properties, setProperties] = useState<DataModel[]>([]);
  //const [widthCol, setWidthCol] = useState(0);
  let widthCol: number;
  let jsonString: any = {};

  const renderPopover = (props: any) => {
    return (
      <Popover className={Styles.popover} {...props}>
        {properties.map((p, i) => {
          return (
            <>
              <Row>
                <Col md={8} style={{ fontWeight: "bold" }}>
                  {p?.name}:
                </Col>
                <Col md={4}>{p?.value}</Col>
              </Row>
            </>
          );
        })}
      </Popover>
    );
  };

  useEffect(() => {
    ImageService.getImage(prop.product?.id!, TargetTypes.products).then((resp) => {
      setImagePath(resp.data);

      properties.length = 0;
      jsonString = JSON.parse(prop.product?.jsonParameters!);
      for (let key in jsonString) {
        properties.push({ name: key, value: jsonString[key] });
      }
    });
    console.log(properties);
  }, [prop.product]);

  return (
    <>
      <OverlayTrigger placement="right" delay={{ show: 350, hide: 400 }} overlay={renderPopover}>
        <Card border="warning" style={{ margin: 10 }}>
          <Card.Img className={Styles.image} variant="top" src={imagePath} />
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
              <Col md="auto" className={Styles.buttonRightSide}>
                <Card.Text className={Styles.textButton}>Купити</Card.Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </OverlayTrigger>
    </>
  );
};

export default RenderProductItem;
