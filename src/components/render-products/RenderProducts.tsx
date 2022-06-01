import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DepartmentModel from "../../models/DepartmentModel";
import ProductModel from "../../models/ProductModel";
import HomeContext from "../../navigation/home/HomeContext";

const RenderProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const { currentCategory } = useContext(HomeContext);

  useEffect(() => {}, [currentCategory]);

  return (
    <Container>
      <p>name of department: {currentCategory?.name}</p>
    </Container>
  );
};

export default RenderProducts;
