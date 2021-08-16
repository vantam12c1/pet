import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import PopularItem from "../HomePopularItem";
PopularList.propTypes = {};

function PopularList(props) {
  const pop = props.popList;
  return (
    <div className="popular-list">
      <div className="grid wide box-card-list">
        {pop.map((val) => (
          <PopularItem
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

export default PopularList;
