import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ProductsPage from "./pages/productspage/productspage.component";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

export default Router;
