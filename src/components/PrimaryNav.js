import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../ShopContext";
import { CartTotal } from "../Utils";

function PrimarnyNav() {
  const {
    toyCategory,
    setToycategory,
    ageFilter,
    products,
    handleAttrFilters,
    handlePriceSorting,
    priceSort,
    setPriceSort,
    query,
    setQuery,
    handleSearch,
    cart,
    loggedIn,
  } = useContext(ShopContext);

  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="row navbar">
          <div className="logo">
            <div>
              <Link to="/">
                <img src="../images/way2door.png" />
              </Link>
            </div>
          </div>
          <div className="nav-cart">
            <Link to="/cart">
              <div className="icon-basket">
                <i className="fa-brands fa-opencart"></i>
                <span className="cart-count">{cart.length}</span>
              </div>
              {/* <div className="cart-count"></div> */}
              {/* <div className="cart-total">
                <span>My basket: ${CartTotal(cart)}</span>
              </div> */}
            </Link>
          </div>
          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
              />
              <span className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimarnyNav;
