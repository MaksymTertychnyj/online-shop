import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductService from "../../api-service/product-service/ProductService";
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
    maxPrice,
    setMaxPrice,
  } = useContext(HomeContext);

  const checkSearchPriceTo = (priceTo: number) => {
    return new Promise((resolve: (val: number) => void) => {
      if (priceTo === 0) {
        resolve(maxPrice);
      }
    });
  };

  const checkSearchParams = (product: ProductModel): boolean => {
    checkSearchPriceTo(searchPriceTo).then((res) => {
      setSearchPriceTo(res);
    });

    if (
      product &&
      (product.name.toLowerCase().startsWith(searchName) || searchName === "") &&
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
        setSearchPriceTo(0);
      });
    }
  }, [currentCategory]);

  useEffect(() => {
    setProducts([]);
    setMaxPrice(0);
    setSearchPriceTo(0);
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
