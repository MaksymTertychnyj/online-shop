import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import CategoryModel from "../../models/CategoryModel";
import HomeContext from "../../navigation/home/HomeContext";
import { CategoryItemProps } from "./CategoryItemProps";

const CategoryItem = (props: CategoryItemProps) => {
  const { currentCategory, setCurrentCategory } = useContext(HomeContext);
  const [color, setColor] = useState("");

  const onClickHandler = () => {
    setCurrentCategory(props.category);
  };

  useEffect(() => {
    setColor(currentCategory === props.category ? "#98AFC7" : "#E5E4E2");
  }, [currentCategory]);

  return (
    <Row>
      <Col
        onClick={onClickHandler}
        style={{
          textAlign: "center",
          height: "40px",
          backgroundColor: color,
          color: "#52595D",
          cursor: "pointer",
        }}
      >
        {props.category?.name}
      </Col>
    </Row>
  );
};

export default CategoryItem;
