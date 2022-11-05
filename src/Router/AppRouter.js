import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "../Components/Todos";
import Users from "../Components/Users";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:id" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
