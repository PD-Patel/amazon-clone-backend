import React from "react";
import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";
function Gamingaccessories() {
  return (
    <div className="electronics__components" style={{ display: "flex" }}>
      <Sidebar />
      <ProductContent db="gaming" />
    </div>
  );
}

export default Gamingaccessories;
