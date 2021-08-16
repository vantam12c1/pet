import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
NewItem.propTypes = {};

function NewItem({ image, title, price, sale_price, cate, newList }) {
  // console.log(price.displayAmount);
  // const data = newList.filter((cate) => {
  //   return cate.some((val) => val == "sale ");
  // });
  // data;

  return (
    <div className="new-item-wrapper">
      <div className="new-item-list">
        <ul className="new-item">
          <li className="item">
            <div className="item-left image">
              <img src={image} className="new-img" />
            </div>
            <div className="item-right new" style={{ width: "145px" }}>
              <Link to="#" className="link">
                {title}
              </Link>
              {/* {
                newList.filter(({cate})=> cate == 'sale').map()
              } */}
              {/* {@if(data){
                
              }} */}
              <div className="price">
                <p className="currently-price"> {price.displayAmount}</p>
                {/* <div className="new-wrapper">
                  <p className="new-price"> 10000</p>
                </div> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewItem;
