import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link, useRouteMatch } from "react-router-dom";
SaleItem.propTypes = {};

function SaleItem({ product, title, price, image, sale_price, slug }) {
  const path = useRouteMatch().path;
  console.log(path);
  return (
    <div className="sale-item-wrapper">
      <div className="sale-item-list">
        <ul className="sale-item">
          <li className="item">
            <div className="item-left image">
              <img src={image} className="sale-img" />
            </div>
            <div className="item-right sale" style={{ width: "145px" }}>
              <Link to={`${slug}`} className="link">
                {title}
              </Link>
              <div className="price">
                <p className="currently-price">{price.displayAmount}</p>
                <div className="sale-wrapper">
                  <p className="sale-price">{sale_price.displayAmount}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SaleItem;
