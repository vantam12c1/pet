import React from "react";
import PropTypes from "prop-types";
import OptionalItem from "../OptionalItem";
OptionalList.propTypes = {};

function OptionalList({ optList }) {
  return (
    <div className="optional-list-wrapper">
      <div className="grid wide optional-card-list">
        {optList.map((val) => (
          <OptionalItem
            key={val.id}
            product={val.product}
            title={val.title}
            price={val.price}
            image={val.poster}
            sale_price={val.sale_price}
            cate={val.cate}
            slug={val.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default OptionalList;
