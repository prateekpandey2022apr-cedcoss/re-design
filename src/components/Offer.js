import React from "react";

function Offer() {
  return (
    <>
      <div className="wrapper">
        <div className="row offers-intro text-center">
          <div className="col-4">
            <h3>Services</h3>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row offers">
          <div className="col-33">
            <div className="offer-icon">
              <i class="fa-solid fa-money-bill"></i>
            </div>
            <div>
              <p>
                Get Free Home Delivery for fruits and vegetables on min order
                price 200 rs and For Grocery on 500 rs only.
              </p>
            </div>
          </div>

          <div className="col-33">
            <div className="offer-icon">
              <i class="fa-solid fa-truck"></i>
            </div>
            <div>
              <p>
                Get Free Home Delivery for fruits and vegetables on min order
                price 200 rs and For Grocery on 500 rs only.
              </p>
            </div>
          </div>

          <div className="col-33">
            <div className="offer-icon">
              <i class="fa-solid fa-life-ring"></i>
            </div>
            <div>
              <p>
                Get Free Home Delivery for fruits and vegetables on min order
                price 200 rs and For Grocery on 500 rs only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
