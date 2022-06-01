import React from "react";
import styled from "styled-components";
import image from "../../assets/images/backgroung_fish.jpg";
import { Container } from "react-bootstrap";

export const Header = () => (
  <Styles>
    <div className="header">
      <div className="overlay"></div>
      <Container>
        <br />
        <h1>Welcome</h1>
      </Container>
    </div>
  </Styles>
);

const Styles = styled.div`
  .header {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    height: 330px;
    position: relative;
    color: #ccc;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
