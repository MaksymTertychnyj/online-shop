import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#8D918D", color: "#E5E4E2" }}>
      <Container style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <p>Online shop</p>
      </Container>
    </Container>
  );
};

export default Footer;
