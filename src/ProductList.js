import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import Footer from "./components/Footer";
import PrimaryNav from "./components/PrimaryNav";
import inventory from "./data";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShopContext from "./ShopContext";
import { getCartQuantity, CartTotal } from "./Utils";

function ProductList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function removeId(event) {}

  const {
    shopCategory,
    setShopcategory,
    ageFilter,
    products,
    handleAttrFilters,
    handlePriceSorting,
    priceSort,
    setPriceSort,
    handleAddCart,
    cart,
    scrollPosition,
    handleBackToTopClick,
    moveToTop,
    modalOpen,
    setModalOpen,
    currentProduct,
    setCurrentProduct,
    handleQtyUpdate,
    removeFromCart,
  } = useContext(ShopContext);

  // console.log({ products });

  const style = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {currentProduct?.name}
            </Typography>
            <Typography>
              <img src={currentProduct?.image} />
            </Typography>
            <Typography>${currentProduct?.price}</Typography>
            <Typography className="modal-rating">
              {Array(currentProduct.rating)
                .fill(0)
                .map((_item) => {
                  return (
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  );
                })}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Product Details: <br />
              Duis mollis, est non commodo luctus, nisi
            </Typography>
          </Box>
        </Modal>
      </>

      <a
        href="#/"
        id="button"
        className={scrollPosition > 200 ? "show" : ""}
        onClick={handleBackToTopClick}
      ></a>
      {cart.length > 0 && (
        <div id="floating-cart">
          <Link
            to="/cart"
            className={scrollPosition > 200 ? "show" : ""}
            onClick={handleBackToTopClick}
          ></Link>
          <span id="cart-count">{cart.length}</span>
        </div>
      )}
      <div className="wrapper">
        <div className="col-4 search-results text-center">
          <p>{products.length} results found.</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="row listing">
          <div className="col-1 attributes-filter">
            <div className="toy-types-filter">
              <h3>Product Categories</h3>
              <ul onClick={handleAttrFilters}>
                <li>
                  <a
                    href="#"
                    className={`shop-category ${
                      shopCategory === "Fruits" ? "active" : ""
                    }`}
                  >
                    Fruits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`shop-category ${
                      shopCategory === "Vegetables" ? "active" : ""
                    }`}
                  >
                    Vegetables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`shop-category ${
                      shopCategory === "Dry Fruits" ? "active" : ""
                    }`}
                  >
                    Dry Fruits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`shop-category ${
                      shopCategory === "Non-Veg" ? "active" : ""
                    }`}
                  >
                    Non-Veg
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`shop-category ${
                      shopCategory === "" ? "active" : ""
                    }`}
                  >
                    View All
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-3-4">
            <div className="horizontal-filters">
              <div className="price-sort">
                <form>
                  <select
                    value={priceSort}
                    onChange={(event) => {
                      setPriceSort(event.target.value);
                      handlePriceSorting(event);
                    }}
                  >
                    <option value="">Price sorting (default)</option>
                    <option value="ltoh">Low to High</option>
                    <option value="htol">High to Low</option>
                  </select>
                </form>
              </div>
            </div>

            {products.length > 0 ? (
              <div className="product-list">
                {products.map((product, idx) => {
                  return (
                    <>
                      <div className="product">
                        <div className="product-discount">
                          <span>{product.discount}% OFF</span>
                        </div>
                        <div className="product-image">
                          <img src={product.image} />
                        </div>
                        <div className="product-title">
                          <h3 className="product-name">
                            <a
                              id={idx}
                              href="#/"
                              onClick={(event) => {
                                setModalOpen(true);
                                setCurrentProduct(product);
                              }}
                            >
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="product-rating">
                          {Array(product.rating)
                            .fill(0)
                            .map((_item) => {
                              return (
                                <span>
                                  <i className="fa-solid fa-star"></i>
                                </span>
                              );
                            })}
                        </div>
                        <div className="product-price">
                          &#8377;{product.price} <small>({product.unit})</small>
                        </div>

                        <div className="cart-counter-group">
                          <div className="cart-counter">
                            <button
                              className="decrement"
                              onClick={(event) => {
                                if (product.quantity !== 1) {
                                  handleQtyUpdate(event, product.id, "-");
                                } else if (window.confirm("Are you sure?")) {
                                  handleQtyUpdate(event, product.id, "-");
                                  // onClick={(event) => handleQtyUpdate(event, item.id)}
                                }
                              }}
                              disabled={getCartQuantity(cart, product.id) === 0}
                            >
                              <i className="fa-solid fa-circle-minus"></i>
                            </button>
                            &nbsp;
                            <span className="item-quantity">
                              {getCartQuantity(cart, product.id)}
                            </span>
                            &nbsp;
                            <button
                              className="increment"
                              onClick={(event) =>
                                handleQtyUpdate(event, product.id, "+")
                              }
                            >
                              <i className="fa-solid fa-circle-plus"></i>
                            </button>
                          </div>

                          <div className="add-cart">
                            {getCartQuantity(cart, product.id) === 0 ? (
                              <>
                                <button
                                  className="buy-btn"
                                  onClick={(event) =>
                                    handleAddCart(event, product.id)
                                  }
                                >
                                  Add To Cart
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="buy-btn"
                                  onClick={(event) =>
                                    removeFromCart(event, product.id)
                                  }
                                >
                                  Remove from Cart
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* <div className="cart-btn">
                          <button
                            className="buy-btn"
                            onClick={(event) =>
                              handleAddCart(event, product.id)
                            }
                          >
                            Buy Now
                          </button>
                        </div> */}
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <>{/* <div>No products found</div> */}</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
