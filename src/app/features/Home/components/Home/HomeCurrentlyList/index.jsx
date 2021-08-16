import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import CurrentlyItem from "../HomeCurrentlyItem";
CurrentlyList.propTypes = {};

function CurrentlyList(props) {
  const current = props.currentList;
  return (
    <div className="current-list">
      <div className="grid wide box-card-list">
        {current.map((val) => (
          <CurrentlyItem
            key={val.id}
            product={val.product}
            title={val.title}
            price={val.price}
            image={val.poster}
            slug={val.key}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrentlyList;
