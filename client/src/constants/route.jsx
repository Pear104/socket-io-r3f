import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Test from "../pages/test/Test.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
