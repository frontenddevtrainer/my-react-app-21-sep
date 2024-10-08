import { createBrowserRouter, Outlet } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ProductsPage from "./pages/productspage/productspage.component";
import Customerpage from "./pages/customerpage/customerpage.component";
import Notfoundpage from "./pages/notfoundpage/notfoundpage.component";
import FlightsPage from "./pages/flights/flights.components";
import AddFlightPage from "./pages/admin/add-flight/add-flight-page.component";
import AdminFlightsPage from "./pages/admin/flights/flights-page.component";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/flights",
    element: <FlightsPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    children: [
      {
        // /products/content-1
        path: "content-1",
        element: <div>Content 1</div>,
      },
      {
        // /products/content-2
        path: "content-2",
        element: (
          <div>
            Content 2 <Outlet></Outlet>
          </div>
        ),
        children: [
          {
            path: "level-2",
            element: <div>Level 2</div>,
          },
        ],
      },
    ],
  },
  {
    // /products/abc
    // /products/43247824972348932
    // /products/djkshfjlsgfjdsafhs
    // /products/fsdjkfd@dskdsd.fdo
    // /products/*(^*&@^*#^#)
    path: "/products/:thisisproductid/productid",
    element: <ProductsPage />,
  },

  {
    path: "/products/:thisisproductid/name/:name",
    element: <ProductsPage />,
  },

  {
    path: "/products/:id/name/:sku",
    element: <ProductsPage />,
  },

  {
    path: "/customer",
    element: <Customerpage />,
  },
  {
    path: "/admin/add-flight",
    element: <AddFlightPage />,
  },
  {
    path: "/admin/flights",
    element: <AdminFlightsPage />,
  },
  {
    path: "*",
    element: <Notfoundpage />,
  },
]);

export default Router;
