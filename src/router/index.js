import { Typography } from "@mui/material";
import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout";
import usersRouter from "../pages/users/router";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Typography variant="h1">Not Found 404</Typography>,
      children: [
        {
          index: true,
          element: <Navigate to={`home`} replace />,
        },
        { path: "/home", element: <Typography variant="h3">Home</Typography> },
        ...usersRouter,
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
