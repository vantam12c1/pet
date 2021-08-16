import React from "react";
import PropTypes from "prop-types";
import ALotItem from "../BuyALotItem";
ALotList.propTypes = {};

function ALotList({ alotList }) {
  return (
    <div className="buy-a-lot-list-wrapper">
      <div className="grid wide buy-a-lot-card-list">
        {alotList.map((val) => (
          <ALotItem
            key={val.id}
            product={val.product}
            title={val.title}
            price={val.price}
            image={val.poster}
            sale_price={val.sale_price}
          />
        ))}
      </div>
    </div>
  );
}

export default ALotList;
