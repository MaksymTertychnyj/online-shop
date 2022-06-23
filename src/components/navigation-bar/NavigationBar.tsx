import { useContext, useEffect, useState } from "react";
import { Button, Col, Nav, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";
import Customer from "../../models/user/CustomerModel";
import LoginProviderContext from "../../providers/login-provider/LoginProviderContext";
import AuthManager from "../auth/AuthManager";
import Layout from "../Layout";
import Image from "react-bootstrap/Image";
import NavigationBarStyles from "./NavigationBarStyles";
import CustomerBagContext from "../../providers/customer-bag-provider/CustomerBagContext";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  const { setShowModalLogin, setShowModalRegister, isLogged, setIsLogged } =
    useContext(LoginProviderContext);
  const { customerAmount, setCustomerAmount, setCustomerProducts } = useContext(CustomerBagContext);
  const [user, setUser] = useState<Customer | null>(null);

  const loginHandler = () => {
    setShowModalLogin(true);
  };

  const logoutHandler = () => {
    AuthManager.signOutAsync();
    setCustomerAmount(0);
    setCustomerProducts([]);
    setIsLogged(false);
  };

  const registerHandler = () => {
    setShowModalRegister(true);
  };

  useEffect(() => {
    if (isLogged) {
      AuthManager.getUser().then((resp) => {
        if (resp) {
          let u: any = JSON.parse(resp);
          setUser(u["customer"]);
          setIsLogged(true);
        }
      });
    } else {
      logoutHandler();
    }
  }, [isLogged]);

  return (
    <Styles>
      <Navbar expand="lg">
        <Layout>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Col sm={4}>
              <Nav className="mr-auto">
                <Nav.Item>
                  <Link className={NavigationBarStyles.link} to="/">
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className={NavigationBarStyles.link} to="/about">
                    About
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className={NavigationBarStyles.link} to="/contacts">
                    Contacts
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={{ span: 4, offset: 4 }}>
              <Nav>
                {isLogged ? (
                  <>
                    <Link to="customerCabinet">
                      <Col
                        style={{
                          paddingRight: 25,
                          color: "#dcdcdc",
                          fontSize: 11,
                          fontWeight: "bold",
                        }}
                      >
                        <Row>{user?.firstName}</Row>
                        <Row>{user?.lastName}</Row>
                      </Col>
                    </Link>
                    <Link to="bag">
                      <Col className={NavigationBarStyles.bagButton}>
                        <Image
                          className={NavigationBarStyles.image}
                          src={require("../../assets/images/icons/shopping-bag-icon.jpg")}
                        />
                      </Col>
                    </Link>
                    <Col className={NavigationBarStyles.bagPrice}>
                      <div>{customerAmount}</div>
                      <div style={{ color: "white", fontSize: 9 }}>UAH</div>
                    </Col>
                    <Col style={{ marginRight: 150 }}>
                      <Button
                        className="mr-2"
                        variant="secondary"
                        size="sm"
                        onClick={logoutHandler}
                      >
                        Out
                      </Button>
                    </Col>
                  </>
                ) : (
                  <>
                    <Button
                      style={{ marginLeft: 10 }}
                      className="mr-2"
                      variant="secondary"
                      size="sm"
                      onClick={loginHandler}
                    >
                      "Log In"
                    </Button>
                    <Button
                      style={{ marginLeft: 10 }}
                      variant="secondary"
                      size="sm"
                      onClick={registerHandler}
                    >
                      Register
                    </Button>
                  </>
                )}
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Layout>
      </Navbar>
    </Styles>
  );
};

const Styles = styled.div`
  .navbar {
    background-color: #4c4646;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    $:hover {
      color: white;
    }
  }

  .text {
    color: #dcdcdc;
  }
`;
