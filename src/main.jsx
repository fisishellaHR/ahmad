import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewsLayout } from "./components/News/newsLayout";
import { PageNews } from "./components/News/PageNews";
import { ErrorPages } from "./components/ErrorPages/errorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Word</div>,
    errorElement: <ErrorPages />,
  },
  {
    path: "/newsLayout",
    element: <NewsLayout />,
  },
  {
    path: "/pageNews",
    element: <PageNews />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
