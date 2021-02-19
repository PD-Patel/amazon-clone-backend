import React from "react";
import Sidebar from "./Sidebar";
import "./Home.css";
import User from "./User";
function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <User />
    </div>
  );
}

export default Home;
