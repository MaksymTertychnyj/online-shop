import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Nav, Navbar, Row, Tab } from "react-bootstrap";
import styled from "styled-components";
import CategoryMenu from "../../components/category-menu/CategoryMenu";
import CategoryModel from "../../models/CategoryModel";
import DepartmentModel from "../../models/DepartmentModel";
import RenderProducts from "../../components/render-products/RenderProducts";
import { useEffect, useState } from "react";
import DepartmentItem from "../../components/department-item/DepartmentItem";
import HomeContext from "./HomeContext";
import ProductModel from "../../models/ProductModel";
import DepartmentService from "../../api-service/department-service/DepartmentService";
import RightBar from "../../components/right-bar-home/RightBar";

const Home = () => {
  const [currentDepartment, setCurrentDepartment] = useState<DepartmentModel>(null);
  const [currentCategory, setCurrentCategory] = useState<CategoryModel>(null);
  const [currentProduct, setCurrentProduct] = useState<ProductModel>(null);
  const [departments, setDepartments] = useState<DepartmentModel[]>([]);
  const [searchPriceUp, setSearchPriceUp] = useState(0);
  const [searchPriceTo, setSearchPriceTo] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    DepartmentService.getAllDepartments().then((resp) => {
      setDepartments(resp.data);
      setCurrentDepartment(resp.data[0]);
    });
  }, []);

  return (
    <>
      <HomeContext.Provider
        value={{
          currentDepartment,
          currentCategory,
          currentProduct,
          searchPriceUp: searchPriceUp,
          searchPriceTo: searchPriceTo,
          searchName,
          maxPrice,
          setCurrentDepartment,
          setCurrentCategory,
          setCurrentProduct,
          setSearchPriceUp: setSearchPriceUp,
          setSearchPriceTo: setSearchPriceTo,
          setSearchName: setSearchName,
          setMaxPrice: setMaxPrice,
        }}
      >
        <Tab.Container transition={false} defaultActiveKey="fishingrod">
          <Styles>
            <div className="navbar justify-content-center">
              {departments.map((d, i) => (
                <DepartmentItem key={i} department={d} />
              ))}
            </div>
            <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
              <Row>
                <CategoryMenu />
                <RenderProducts />
                <RightBar />
              </Row>
            </Container>
          </Styles>
        </Tab.Container>
      </HomeContext.Provider>
    </>
  );
};

export default Home;

const Styles = styled.div`
  .navbar {
    background-color: #387c44;
  }

  .nav-link {
    color: white;

    $:hover {
      color: white;
    }
  }
`;
