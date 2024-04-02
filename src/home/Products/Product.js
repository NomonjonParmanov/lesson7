import React, { useEffect, useState } from "react";
import "../../sass/global.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "https://fakestoreapi.com/products";
function Product() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  useEffect(() => {
    axios
      .get(`${API_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    let url =
      categoryValue === ""
        ? `${API_URL}?limit=${count}`
        : `${API_URL}/category/${categoryValue}?limit=${count}`;
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count, categoryValue]);
  const getCategory = (text) => {
    setCategoryValue(text);
    setData([]);
  };

  let products = data?.map((el) => (
    <div key={el.id} className="product__card">
      <Link to={`/product/${el.id}`}>
        <img src={el.image} alt="" />
        <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
        <div className="buy">
          <h3>{el.price} USD</h3>
          <button>BUY</button>
        </div>
      </Link>
    </div>
  ));
  let categoryItems = categories?.map((el, inx) => (
    <li onClick={() => getCategory(el)} key={inx}>
      {el}
    </li>
  ));
  return (
    <>
      <div className="container products">
        <h1>Popular Products</h1>
        <ul className="collection">
          <li onClick={() => getCategory("")}>All</li>
          {categoryItems}
        </ul>
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
