import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import ProductService from "../../api-service/product-service/ProductService";
import DepartmentModel from "../../models/DepartmentModel";
import ProductModel from "../../models/ProductModel";
import HomeContext from "../../navigation/home/HomeContext";
import RenderProductItem from "./RenderProductItem";

const RenderProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const {
    currentCategory,
    currentDepartment,
    searchName,
    searchPriceUp,
    searchPriceTo,
    setSearchPriceTo,
    setSearchPriceUp,
    maxPrice,
    setMaxPrice,
  } = useContext(HomeContext);

  const checkSearchParams = (product: ProductModel): boolean => {
    if (searchPriceTo === 0) {
      setSearchPriceTo(maxPrice);
    }
    if (
      product &&
      (product.name.startsWith(searchName.toUpperCase()) || searchName === "") &&
      product.price >= searchPriceUp &&
      product.price <= searchPriceTo
    )
      return true;

    return false;
  };

  useEffect(() => {
    if (currentCategory && currentCategory.id) {
      ProductService.getProductsByCategory(currentCategory.id).then((resp) => {
        setProducts(resp.data);
        setMaxPrice(0);
      });
    }
  }, [currentCategory]);

  useEffect(() => {
    setProducts([]);
    setMaxPrice(0);
  }, [currentDepartment]);

  useEffect(() => {}, [searchPriceUp, searchPriceTo]);

  return (
    <Col sm={8}>
      <Row xs={1} md={4} className="g-4">
        {products.map((p, i) => {
          for (let p of products) {
            if (p!.price > maxPrice) {
              setMaxPrice(p!.price);
            }
          }
          if (checkSearchParams(p)) {
            return <RenderProductItem key={i} product={p} />;
          }
        })}
      </Row>
    </Col>
  );
};

export default RenderProducts;
