import React from "react";
import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";
function Topcategories() {
  return (
    <div className="electronics__components" style={{ display: "flex" }}>
      <Sidebar />
      <ProductContent db="topcategories" />
    </div>
  );
}

export default Topcategories;
