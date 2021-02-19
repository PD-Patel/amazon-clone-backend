import React from "react";
import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";

function Electronics() {
  return (
    <div className="electronics__components" style={{ display: "flex" }}>
      <Sidebar />
      <ProductContent db="electronics" />
    </div>
  );
}

export default Electronics;
