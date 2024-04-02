import React from "react";
import adminOne from "../../images/admin1.png";
import adminSecond from "../../images/admin2.png";
import "../../sass/global.scss";
function Adming() {
  return (
    <div className="container">
      <div className="admin">
        <div className="left">
          <h1>Admin</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae necessitatibus quasi incidunt alias adipisci pariatur
            earum iure beatae assumenda rerum quod. Tempora magni autem a
            voluptatibus neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            rerum cum accusamus magni consequuntur architecto, ipsum deleniti
            expedita doloribus suscipit voluptatum eius perferendis amet!.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, maxime amet architecto est exercitationem optio ea
            maiores corporis beatae, dolores doloribus libero nesciunt qui
            illum? Voluptates deserunt adipisci voluptatem magni sunt sed
            blanditiis quod aspernatur! Iusto?
          </p>
          <img src={adminOne} alt="" />
        </div>
        <div className="right">
          <img src={adminSecond} alt="" />
        </div>
      </div>
      <div className="admin__cards">
        <div className="admin__card">
          <h4>Product Packing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>{" "}
        <div className="admin__card">
          <h4>24X7 Support</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>{" "}
        <div className="admin__card">
          <h4>Delivery in 5 Days</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>{" "}
        <div className="admin__card">
          <h4>Payment Secure</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  );
}

export default Adming;
