import React from "react";
import "../../sass/global.scss";
import logo from "../../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Second() {
  return (
    <div className="container  ">
      <div className="second">
        <img src={logo} alt="" />
        <ul className="nav__links2">
          <li>
            <input type="text" placeholder="Search For items..." />
          </li>
          <li>
            <button>All Categories</button>
          </li>
          <li>
            <button className="search">
              <CiSearch />
            </button>
          </li>
        </ul>
        <ul className="nav__links3">
          <li>
            <IoMdPerson />
          </li>
          <li>Account</li>
          <li>
            <CiHeart />
          </li>
          <li>Wishlist</li>
          <li>
            <CiShoppingCart />
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Second;
