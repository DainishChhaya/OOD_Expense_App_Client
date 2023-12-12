import React from "react";
import "../src/styles/App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Allgroups from "./components/Allgroups";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />

      <Footer></Footer>
      {/* <Indvgroup /> */}
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Navbar />}> */}
      {/* <Route path="/" element={<Footer />}> */}
      {/* <Route path="/" element={<Login />}> */}
      {/* <Route path="/group1" element={<Allgroups />} />
            <Route path="/group2" element={<Allgroups />} />
            <Route path="/group3" element={<Allgroups />} /> */}
      {/* </Route> */}
      {/* </Routes> */}
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
