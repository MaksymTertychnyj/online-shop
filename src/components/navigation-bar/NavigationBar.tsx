import { useContext, useEffect, useRef, useState } from "react";
import { Button, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import styled from "styled-components";
import UserAuthenticateModel from "../../models/user/UserAuthenticateModel";
import User from "../../models/user/UserModel";
import LoginProviderContext from "../../providers/login-provider/LoginProviderContext";
import AuthManager from "../auth/AuthManager";
import Layout from "../Layout";

export const NavigationBar = () => {
  const { setShowModal, isLogged, setIsLogged } = useContext(LoginProviderContext);
  const [user, setUser] = useState<User | null>(null);

  const loginHandler = () => {
    setShowModal(true);
  };

  const logoutHandler = () => {
    AuthManager.signOutAsync();
    setIsLogged(false);
  };

  const registerHandler = () => {};

  useEffect(() => {
    if (isLogged) {
      AuthManager.getUser().then((resp) => (resp ? setUser(JSON.parse(resp)) : {}));
    }
  }, [isLogged]);

  return (
    <Styles>
      <Navbar expand="lg">
        <Layout>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              {isLogged ? (
                <>
                  <div
                    style={{
                      paddingRight: 50,
                      color: "#dcdcdc",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    <div>{user?.firstName}</div>
                    <div>{user?.lastName}</div>
                  </div>
                  <Button className="mr-2" variant="secondary" onClick={logoutHandler}>
                    "Log Out"
                  </Button>
                </>
              ) : (
                <>
                  <Button className="mr-2" variant="secondary" onClick={loginHandler}>
                    "Log In"
                  </Button>
                  <Button variant="secondary" size="sm" onClick={registerHandler}>
                    Register
                  </Button>
                </>
              )}
            </Nav>
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
