import React from "react";
import "../../sass/global.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";

function FirstNavbar() {
  return (
    <div className="container">
      <div className="first">
        <HiMenuAlt1 className="btn" />
        <ul className="nav__links">
          <li>Home</li>
          <li>Category</li>
          <li>Products</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Elements</li>
        </ul>
        <ul className="nav__links">
          <li>
            <MdOutlineLocalPhone />
          </li>
          <li>+123 ( 456 ) ( 7890 )</li>
        </ul>
      </div>
    </div>
  );
}

export default FirstNavbar;
