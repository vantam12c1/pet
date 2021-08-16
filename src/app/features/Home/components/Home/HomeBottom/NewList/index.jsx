import React from "react";
import PropTypes from "prop-types";
import NewItem from "../NewItem";
import "./style.scss";
NewList.propTypes = {};

function NewList({ newList }) {
  return (
    <div className="new-list-wrapper">
      <div className="grid wide new-card-list">
        {newList.map((val) => (
          <NewItem
            key={val.id}
            product={val.product}
            title={val.title}
            price={val.price}
            image={val.poster}
            sale_price={val.sale_price}
            cate={val.cate}
          />
        ))}
      </div>
    </div>
  );
}

export default NewList;
