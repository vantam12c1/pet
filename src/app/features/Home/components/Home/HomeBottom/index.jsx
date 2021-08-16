import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import SaleList from "./SaleList";
import NewList from "./NewList";
import ALotList from "./BuyALotList";
import OptionalList from "./OptionalList";

HomeBottom.propTypes = {};

function HomeBottom({ saleList, newList, alotList, optList }) {
  return (
    <div className="grid wide home-bottom-wrapper">
      <div className="row home-bottom-list">
        <div className="col l-3 home-bottom-item sale-product">
          <h4>Sản phẩm giảm giá</h4>
          <SaleList saleList={saleList} />
        </div>
        <div className="col l-3 home-bottom-item new-product">
          <h4>Sản phẩm mới</h4>
          <NewList newList={newList} />
        </div>
        <div className="col l-3 home-bottom-item buy-a-lot-product">
          <h4>Sản phẩm mua nhiều</h4>
          <ALotList alotList={alotList} />
        </div>
        <div className="col l-3 home-bottom-item optional-product">
          <h4>Sản phẩm tự chọn</h4>
          <OptionalList optList={optList} />
        </div>
      </div>
    </div>
  );
}

export default HomeBottom;
