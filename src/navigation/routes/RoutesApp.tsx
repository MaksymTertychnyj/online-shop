import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import { Header } from "../../components/header/Header";
import { NavigationBar } from "../../components/navigation-bar/NavigationBar";
import About from "../about/About";
import Contacts from "../contacts/Contscts";
import Home from "../home/Home";
import NoMatch from "../no-match/NoMatch";
import CustomerBagContext from "../../components/customer-bag/CustomerBagContext";
import CustomerBag from "../../components/customer-bag/CustomerBag";
import { Container } from "react-bootstrap";
import ProductModel from "../../models/ProductModel";
import Switch from "react-bootstrap/esm/Switch";

const RoutesApp = () => {
  const [customerAmount, setCustomerAmount] = useState(0);
  const [customerProducts, setCustomerProducts] = useState<ProductModel[]>([]);

  return (
    <CustomerBagContext.Provider
      value={{
        customerAmount: customerAmount,
        customerProducts,
        setCustomerAmount: setCustomerAmount,
        setCustomerProducts,
      }}
    >
      <Router>
        <NavigationBar />
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/bag" element={<CustomerBag />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
      <Footer />
    </CustomerBagContext.Provider>
  );
};

export default RoutesApp;
