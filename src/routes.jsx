import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ProductsPage from "./pages/productspage/productspage.component";
import Customerpage from "./pages/customerpage/customerpage.component";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/customer",
    element: <Customerpage />,
  },
]);

export default Router;
