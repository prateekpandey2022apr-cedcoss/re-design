import React from "react";

function Footer() {
  return (
    <div className="wrapper">
      <div className="row footer">
        <div className="col-2 info">
          <h3>About us</h3>
          <p>
            About Us Way2door is a Online Vending System of W2D Online Services
            Pvt. Ltd founded in November 2017. It gives the online platform to
            the vendors who want to sell their products & services to the
            customers directly. Our aim is to provide best quality and fresh
            products to our customers on competitive prices from their local
            vendors online with home delivery facility on the convenient
            schedules of customers and vendors.
          </p>
          <address>
            Address : Vivek Khand Gomti <br /> Nagar Lucknow, Lucknow UP <br />
            226010 INDIA
          </address>
        </div>
        <div className="col-2 social">
          <div>We're social. Follow us on.</div>
          <div className="social-icons">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
