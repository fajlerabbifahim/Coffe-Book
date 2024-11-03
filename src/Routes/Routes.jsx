import { createBrowserRouter } from "react-router-dom";

import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coffee",
        element: <Coffees />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default routes;
