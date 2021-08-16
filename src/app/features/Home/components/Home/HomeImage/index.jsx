import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
HomeImage.propTypes = {};

function HomeImage(props) {
  return (
    <>
      <div className="background-img-home">
        <div className="grid wide background-home-list">
          <div className="row background-home-item">
            <div className="col l-3 background-image">
              <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/ntt1.png" />
            </div>
            <div className="col l-3 background-image">
              <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/ntt2.png" />
            </div>
            <div className="col l-3 background-image">
              <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/ntt3.png" />
            </div>
            <div className="col l-3 background-image">
              <img src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/10/ntt4.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeImage;
