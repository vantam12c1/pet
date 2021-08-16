import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
OptionalItem.propTypes = {};

function OptionalItem({
  image,
  title,
  price,
  sale_price,
  cate,
  newList,
  slug,
}) {
  return (
    <div className="optional-item-wrapper">
      <div className="optional-item-list">
        <ul className="optional-item">
          <li className="item">
            <div className="item-left image">
              <img src={image} className="optional-img" />
            </div>
            <div className="item-right " style={{ width: "140px" }}>
              <Link to="#" className="link">
                {title}
              </Link>
              <div className="price">
                <p className="currently-price">{price.displayAmount}</p>
                {/* <div className="sale-wrapper">
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

export default OptionalItem;
