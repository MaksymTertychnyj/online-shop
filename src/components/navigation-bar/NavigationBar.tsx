import { useContext, useRef, useState } from "react";
import { Button, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import styled from "styled-components";
import LoginProviderContext from "../../providers/login-provider/LoginProviderContext";
import Layout from "../Layout";

export const NavigationBar = () => {
  const { setShowModal } = useContext(LoginProviderContext);

  const loginHandler = () => {
    setShowModal(true);
  };

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
              <Button className="mr-2" variant="secondary" onClick={loginHandler}>
                LogIn
              </Button>
              <Button variant="secondary" size="sm">
                Register
              </Button>
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
`;
