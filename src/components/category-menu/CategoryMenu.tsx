import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import styled from "styled-components";
import CategoryModel from "../../models/CategoryModel";
import HomeContext from "../../navigation/home/HomeContext";
import CategoryItem from "./CategoryItem";

const CategoryMenu = () => {
  const { currentDepartment } = useContext(HomeContext);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    setCategories(
      Object.create([
        { id: 1, name: "спіннінгові", targetType: 1, departmentId: 1 },
        { id: 2, name: "карпові", targetType: 1, departmentId: 1 },
        { id: 3, name: "поплавкові", targetType: 1, departmentId: 1 },
        { id: 4, name: "фідери", targetType: 1, departmentId: 1 },
      ])
    );
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
