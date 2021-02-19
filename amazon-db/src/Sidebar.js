import React from "react";
import "./Sidebar.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/users">
        <div className="option_sidebar users_option">
          <ArrowRightAltIcon className="arrow" />
          <p className="users">users</p>
        </div>
      </Link>

      <Link to="/electronics">
        <div className="option_sidebar users_option">
          <ArrowRightAltIcon className="arrow" />
          <p className="users">electronics</p>
        </div>
      </Link>
      <Link to="/amazonbasic">
        <div className="option_sidebar product_option">
          <ArrowRightAltIcon className="arrow" />
          <p className="products"> AmazonBasic</p>
        </div>
      </Link>
      <Link to="/idealtv">
        <div className="option_sidebar product_option">
          <ArrowRightAltIcon className="arrow" />
          <p className="products"> Ideal TV</p>
        </div>
      </Link>
      <Link to="/topcategories">
        <div className="option_sidebar product_option">
          <ArrowRightAltIcon className="arrow" />
          <p className="products"> Top Categories</p>
        </div>
      </Link>
      <Link to="/gamingaccessories">
        <div className="option_sidebar product_option">
          <ArrowRightAltIcon className="arrow" />
          <p className="products"> Gaming Accessories</p>
        </div>
      </Link>
      <Link to="/computer&accessories">
        <div className="option_sidebar product_option">
          <ArrowRightAltIcon className="arrow" />
          <p className="products"> Computer & Accessories</p>
        </div>
      </Link>

      <div className="option_sidebar orders_option">
        <ArrowRightAltIcon className="arrow" />
        <p className="orders">Orders</p>
      </div>
    </div>
  );
}

export default Sidebar;
