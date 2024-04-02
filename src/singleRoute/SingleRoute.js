import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../sass/global.scss";
import { FaRegStar } from "react-icons/fa";

const API_URL = "https://fakestoreapi.com/products";
function SingleRoute() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);
  {
    loading && <div className="loader container"></div>;
  }

  return (
    <div className="container single">
      <div className="left">
        <h3>Product Category</h3>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">Juice & Drinks</label>
          <p>[20]</p>
        </div>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">Dairy & Milk</label>
          <p>[54]</p>
        </div>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">Snack & Spice</label>
          <p>[64]</p>
        </div>
        <h3>Filter By Price</h3>
        <input type="range" className="range" />
        <p>
          Price :<span>$20 - $250</span>
        </p>
        <button>Filter</button>
        <h3>product Category</h3>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">Blue</label>
          <div className="blue"></div>
        </div>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">Yellow</label>
          <div className="yellow"></div>
        </div>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">Red</label>
          <div className="red"></div>
        </div>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">Green</label>
          <div className="green"></div>
        </div>
        <h3>Weight</h3>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">2kg Pack</label>
        </div>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">20kg Pack</label>
        </div>
        <div className="label">
          <input className="check" type="checkbox" />
          <label htmlFor="">30kg pack</label>
        </div>
      </div>
      <div className="middle">
        <img src={product?.image} width={400} alt="" />
      </div>
      <div className="right">
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <p className="star">
          {product?.rating?.rate}
          <FaRegStar />
        </p>
        <div className="brand">
          <h4>Brand :</h4>
          <p> ESTA BETTERU CO</p>
        </div>
        <div className="brand">
          <h4>Flavour :</h4>
          <p> Super Saver Pack</p>
        </div>
        <div className="brand">
          <h4>Diet Type :</h4>
          <p> Vegetarian</p>
        </div>
        <div className="brand">
          <h4>Weight :</h4>
          <p> 200 Grams</p>
        </div>
        <div className="brand">
          <h4>Speciality :</h4>
          <p> Gluten Free, Sugar Free</p>
        </div>
        <div className="brand">
          <h4>Info :</h4>
          <p>Egg Free, Allergen-Free</p>
        </div>
        <div className="brand">
          <h4>Items :</h4>
          <p> 1</p>
        </div>
        <p className="price">
          ${product?.price} <span>$50</span>
        </p>
        <div className="buttons">
          <h4>Size/Weight :</h4>
          <button className="active">50kg</button>
          <button>80kg</button>
          <button>120kg</button>
          <button>200kg</button>
        </div>
      </div>
    </div>
  );
}

export default SingleRoute;
