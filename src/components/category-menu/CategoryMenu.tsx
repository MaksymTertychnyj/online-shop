import { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import styled from "styled-components";
import CategoryService from "../../api-service/category-service/CategoryService";
import CategoryModel from "../../models/CategoryModel";
import HomeContext from "../../navigation/home/HomeContext";
import CategoryItem from "./CategoryItem";

const CategoryMenu = () => {
  const { currentDepartment, setCurrentCategory } = useContext(HomeContext);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    if (currentDepartment) {
      CategoryService.getCategoriesByDepartment(currentDepartment?.id!).then((resp) => {
        setCategories(resp.data);
        setCurrentCategory(null);
      });
    }
  }, [currentDepartment]);

  return (
    <Col sm={3}>
      <Row style={{ height: 30, width: "100%" }}>
        <Col
          style={{
            backgroundColor: "#00A36C",
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          {currentDepartment?.name}
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          {categories.map((c, i) => (
            <CategoryItem key={i} category={c} />
          ))}
        </Col>
      </Row>
    </Col>
  );
};

export default CategoryMenu;
