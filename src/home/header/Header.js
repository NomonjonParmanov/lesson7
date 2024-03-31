import React from "react";
import "../../sass/global.scss";
import { IoMdClose } from "react-icons/io";

function Header() {
  return (
    <div className="bg">
      <div className="header container">
        <div className="left">
          <h3>
            <span>100%</span> Organic Vegetables
          </h3>
          <h1>The best way to stuff your wallet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            reiciendis beatae consequuntur.
          </p>

          <input type="email" placeholder=" Your emaill address" />

          <button>Subscribe</button>
        </div>
        <div className="right">
          <ul className="header__links">
            <li>
              <IoMdClose />
              Shopping
            </li>
            <li>
              <IoMdClose />
              Recips
            </li>
            <li>
              <IoMdClose />
              Kitchen
            </li>
            <li>
              <IoMdClose />
              News
            </li>
            <li>
              <IoMdClose />
              Food
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
