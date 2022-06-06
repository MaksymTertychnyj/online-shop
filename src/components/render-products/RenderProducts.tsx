import { useContext, useEffect, useState } from "react";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import ProductService from "../../api-service/product-service/ProductService";
import DepartmentModel from "../../models/DepartmentModel";
import ProductModel from "../../models/ProductModel";
import HomeContext from "../../navigation/home/HomeContext";
import RenderProductItem from "./RenderProductItem";

const RenderProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const { currentCategory, setCurrentProduct, currentDepartment } = useContext(HomeContext);

  useEffect(() => {
    ProductService.getProductsByCategory(currentCategory?.id!).then((resp) => {
      setProducts(resp.data);
    });
  }, [currentCategory]);

  useEffect(() => {
    setProducts([]);
  }, [currentDepartment]);

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {products.map((p, i) => (
          <RenderProductItem key={i} product={p} />
        ))}
      </Row>
    </>
  );
};

export default RenderProducts;
