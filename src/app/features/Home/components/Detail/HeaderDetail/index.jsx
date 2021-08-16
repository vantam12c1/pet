import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

HeaderDetail.propTypes = {};

function HeaderDetail({ data, product, title, image, slug, price }) {
  // console.log(title);
  return (
    <ul className="list-product-item detail-header" style={{ width: "200px" }}>
      <li className="item">
        <div className="item-left image">
          <img src={image} className="list-product-img" />
        </div>
        <div className="item-right list" style={{ width: "150px" }}>
          <Link to="#" className="link">
            {title}
          </Link>
          <div className="price">
            <p className="currently-price">{price.displayAmount}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default HeaderDetail;
