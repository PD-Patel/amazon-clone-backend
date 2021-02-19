import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header-right">
        <p className="lineOne">Hello, pdpatel267@gmail.com</p>
        <p className="lineTwo">Sign Out</p>
      </div>
    </div>
  );
}

export default Header;
