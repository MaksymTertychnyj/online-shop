import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contscts";
import Home from "./components/home/Home";
import NoMatch from "./components/no-match/NoMatch";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route element={<NoMatch />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
