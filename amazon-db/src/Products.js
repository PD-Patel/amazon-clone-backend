import React from "react";
import Sidebar from "./Sidebar";
import "./Products.css";
import ProductContent from "./ProductContent";

function Products() {
  return (
    <div className="products_components">
      <Sidebar />
      <ProductContent db="amazonbasic" />
    </div>
  );
}

export default Products;
