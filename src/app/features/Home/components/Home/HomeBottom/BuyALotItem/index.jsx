import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
ALotItem.propTypes = {};

function ALotItem({ product, title, price, image, sale_price }) {
  return (
    <div className="buy-a-lot-item-wrapper">
      <div className="buy-a-lot-item-list">
        <ul className="buy-a-lot-item">
          <li className="item">
            <div className="item-left image">
              <img src={image} className="buy-a-lot-img" />
            </div>
            <div className="item-right alot" style={{ width: "145px" }}>
              <Link to="#" className="link">
                {title}
              </Link>
              <div className="price">
                <p className="currently-price">{price.displayAmount}</p>
                {/* <div className="a-lot-wrapper">
                  <p className="sale-price">{sale_price.displayAmount}</p>
                </div> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ALotItem;
