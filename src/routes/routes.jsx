import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/products/:id", element: <span>Category</span> },
      { path: "/product/:id", element: <span>Product</span> },
    ],
  },
]);
