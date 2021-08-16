import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Tabs, Tab, Panel, useTabState, usePanelState } from "@bumaga/tabs";
FooterDetail.propTypes = {};

function FooterDetail({ val }) {
  // handleClick = () => {
  //   const currentClass = document.getElementsByClassName("tab-item");
  //   for (let i = 0; i < currentClass.length; i++) {
  //     currentClass[i].classList.toggle("active_item");
  //     console.log(currentClass[i]);
  //   }
  // };
  return (
    <div className="product-tabs-wrapper">
      <Tabs>
        <div className="tab">
          <Tab className="tab-item">
            <button className="btn-desc">MÔ TẢ </button>
          </Tab>
          <div className="btn-rate-wrapper">
            <Tab className="tab-item">
              <button className="btn-rate">ĐÁNH GIÁ</button>
            </Tab>
          </div>
        </div>

        <Panel>
          <div className="policy-wrapper">
            <p className="description_top">{val.description_top}</p>
            <p className="description_bot">{val.description_bot}</p>
            <ul className="policy">
              {val.purchase_policy?.map((item, i) => {
                return (
                  <li key={i} className="policy-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </Panel>
        <Panel>
          <p className="text-rate">Đánh giá</p>
          <div className="review-form">
            <div className="respond">
              <p className="text-respond">
                Hãy là người đầu tiên nhận xét "{val.title}"{" "}
              </p>
              <div className="comment-form-rating">
                <label className="text-your-rating">Đánh giá của bạn</label>
              </div>
            </div>
          </div>
        </Panel>
      </Tabs>
    </div>
  );
}

export default FooterDetail;
