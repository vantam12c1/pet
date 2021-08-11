import React from "react";
import PropTypes from "prop-types";

CurrentlyItem.propTypes = {};

function CurrentlyItem({ product, title, price, image }) {
  return (
    <div className="current-Item">
      <div className="grid wide box-card">
        <div className="box-card-list">
          <div className="box-card-item">
            <div className="image-item">
              <img src={image} style={{ width: "20%" }} />
            </div>
            <div className="card">
              <h4>{product}</h4>
              <p>{price.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyItem;
