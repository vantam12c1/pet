import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
CurrentlyItem.propTypes = {};

function CurrentlyItem({ product, title, price, image, slug }) {
  return (
    <div className="current-item">
      <div className="box-card-item">
        <div className="image-item">
          <Link to={`/${slug}`}>
            <img src={image} style={{ width: "80%" }} className="image-hover"/>
          </Link>
        </div>
        <div className="card-item">
          <h4>{product}</h4>
          <p className="text-amount">$ {price.amount}</p>
          <div className="btn-mua-hang">
            <Link to="#" className="btn-card">
              Giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyItem;
