import React from "react";
import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";

function Idealtv() {
  return (
    <div className="electronics__components" style={{ display: "flex" }}>
      <Sidebar />
      <ProductContent db="idealtv" />
    </div>
  );
}

export default Idealtv;
