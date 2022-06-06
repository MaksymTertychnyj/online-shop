import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import styled from "styled-components";
import CategoryService from "../../api-service/category-service/CategoryService";
import CategoryModel from "../../models/CategoryModel";
import HomeContext from "../../navigation/home/HomeContext";
import CategoryItem from "./CategoryItem";

const CategoryMenu = () => {
  const { currentDepartment, setCurrentCategory } = useContext(HomeContext);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    CategoryService.getCategoriesByDepartment(currentDepartment?.id!).then((resp) => {
      setCategories(resp.data);
      setCurrentCategory(null);
    });
  }, [currentDepartment]);

  return (
    <Container>
      <Table striped bordered borderless hover>
        <thead style={{ backgroundColor: "#00A36C", height: 30 }}>
          <tr style={{ fontWeight: "bold", textAlign: "center", color: "white" }}>
            {currentDepartment?.name}
          </tr>
        </thead>
        <tbody>
          {categories.map((c, i) => (
            <CategoryItem key={i} category={c} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CategoryMenu;
