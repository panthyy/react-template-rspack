import React from "react";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexPage } from "./pages";
import { NotFoundPage } from "./pages/404";

import "@fontsource/inter/600.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
