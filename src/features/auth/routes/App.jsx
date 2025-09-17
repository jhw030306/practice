import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "../component/SignUp";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/auth/signup" />} />
      {/* { path: "*", element: <Navigate to="/" /> } */}
    </Routes>
  );
};
