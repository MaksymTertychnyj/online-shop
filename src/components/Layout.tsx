import { Container } from "react-bootstrap";
import styled from "styled-components";

const Layout = (props: any) => {
  return <Container>{props.children}</Container>;
};

export default Layout;

const Styles = styled.div`
  .container {
    background-color: #000;
    opacity: 0.5;
  }
`;
