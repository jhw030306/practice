import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthRoutes } from "../features/auth/routes/App";
import { MainPage } from "../features/misc/routes/MainPage";

export const AppRoutes = () => {
  const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/auth/*", element: <AuthRoutes /> },
    { path: "*", element: <Navigate to="/" /> },
  ];
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
