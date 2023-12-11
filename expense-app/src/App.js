import React from "react";
import "../src/styles/App.css";


import { Route, BrowserRouter, Routes } from "react-router-dom";
import Allgroups from "./components/Allgroups";



function App() {
  return (
    <>
      {/* <Indvgroup /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Allgroups/>}>
          <Route path="/group1" element={<Allgroups/>} />
          <Route path="/group2" element={<Allgroups/>} />
          <Route path="/group3" element={<Allgroups/>} />
          
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
