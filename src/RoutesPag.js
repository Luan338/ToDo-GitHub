import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Repo from "./pages/Repositorio/Repo";

const RoutesPag = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/repositorio/:repositorio" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPag;
