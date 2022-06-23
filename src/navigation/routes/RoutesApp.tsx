import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import { Header } from "../../components/header/Header";
import { NavigationBar } from "../../components/navigation-bar/NavigationBar";
import About from "../about/About";
import Contacts from "../contacts/Contscts";
import Home from "../home/Home";
import NoMatch from "../no-match/NoMatch";
import CustomerBag from "../../components/customer-bag/CustomerBag";
import CustomerCabinet from "../customer-cabinet/CustomerCabinet";

const RoutesApp = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/bag" element={<CustomerBag />} />
          <Route path="/customerCabinet" element={<CustomerCabinet />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default RoutesApp;
