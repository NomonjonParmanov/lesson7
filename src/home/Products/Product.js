import React, { useEffect, useState } from "react";
import "../../sass/global.scss";
import axios from "axios";
const API_URL = "https://fakestoreapi.com/products";
function Product() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(8);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}?limit=${count}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  let products = data?.map((el) => (
    <div key={el.id} className="product__card">
      <img src={el.image} alt="" />
      <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
      <div className="buy">
        <h3>{el.price} USD</h3>
        <button>BUY</button>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container products">
        <h1>Popular Products</h1>
        {loading && <div className="loader container"></div>}
        <div className="product__cards">{products}</div>
        <button className="btn3" onClick={() => setCount((p) => p + 4)}>
          See more
        </button>
      </div>
    </>
  );
}

export default Product;
