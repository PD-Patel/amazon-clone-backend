import React from "react";
import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";
function Computer() {
  return (
    <div className="electronics__components" style={{ display: "flex" }}>
      <Sidebar />
      <ProductContent db="computer&accessories" />
    </div>
  );
}

export default Computer;
