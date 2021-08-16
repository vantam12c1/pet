import React from "react";
import PropTypes from "prop-types";
import SaleItem from "../SaleItem";

SaleList.propTypes = {};

function SaleList({ saleList }) {
  return (
    <div className="sale-list-wrapper">
      <div className="grid wide sale-card-list">
        {saleList.map((val) => (
          <SaleItem
            key={val.id}
            product={val.product}
            title={val.title}
            price={val.price}
            image={val.poster}
            sale_price={val.sale_price}
            slug={val.key}
          />
        ))}
      </div>
    </div>
  );
}

export default SaleList;
