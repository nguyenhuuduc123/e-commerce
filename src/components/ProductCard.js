import React from "react";
import ReactStars from "react-rating-stars-component";

import { Link, useLocation } from "react-router-dom";
const ProductCart = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product_image"
            />
            <img
              src="images/watch-1.jpg"
              alt="product_image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$2000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to="/1" id="RouterNavLink">
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="/2" id="RouterNavLink">
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link to="/3" id="RouterNavLink">
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
              <Link to="/4" id="RouterNavLink">
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product_image"
            />
            <img
              src="images/watch-1.jpg"
              alt="product_image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$2000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to="/1" id="RouterNavLink">
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link to="/2" id="RouterNavLink">
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link to="/3" id="RouterNavLink">
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
              <Link to="/4" id="RouterNavLink">
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCart;
