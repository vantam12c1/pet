import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
HomePolicy.propTypes = {};

function HomePolicy(props) {
  return (
    <div className="policy-purchase">
      <div className="grid wide policy-list">
        <div className="policy-item save">
          <div className="img-inner">
            <img
              src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/slider-dog-small.png"
              className="item-one"
            />
          </div>
          <div className="list-text one">
            <div className="poster">
              <p>Tiết kiệm</p>
              <h2>25%</h2>
              <h3>Thức ăn chó mèo</h3>
            </div>
          </div>
        </div>
        <div className="policy-item advise">
          <div className="img-inner">
            <img
              src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/slider-cat.png"
              className="item-two"
            />
          </div>
          <div className="list-text two">
            <div className="poster">
              <p>Tư vấn</p>
              <h2 className="txt-free">miễn phí</h2>
              <div className="btn-advise">
                <Link to="#">
                  Tư vấn <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="policy-item limited">
          <div className="img-inner">
            <img
              src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/slider-dog.png"
              className="item-three"
            />
          </div>
          <div className="list-text three">
            <div className="poster">
              <p>có hạn</p>
              <h2 className="txt-save-free">
                tiết kiệm đến <span className="txt-percent">45%</span>
              </h2>
              <div className="btn-more">
                <Link to="#">
                  Nhiều hơn <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePolicy;
