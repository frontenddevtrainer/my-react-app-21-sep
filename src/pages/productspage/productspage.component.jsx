import React from "react";
import Header from "../../components/header/header.component";

import { Outlet, useParams } from "react-router-dom";

const ProductsPage = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <Header name="NewTravelApp" />
      Products Page
      <Outlet/>
    </div>
  );
};

export default ProductsPage;
