import React from "react";
import "../../sass/global.scss";
function Card() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <h1>Everyday Fresh & Clean with Our Products</h1>
          <button>Shop Now</button>
        </div>
        <div className="card2">
          <h1>Make your Breakfast Healthy and Easy</h1>
          <button>Shop Now</button>
        </div>
        <div className="card3">
          <h1>The best Organic Products Online</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
