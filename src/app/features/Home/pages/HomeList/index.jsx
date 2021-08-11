import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import "./style.scss";
import api from "../../../../api/apiService";
import HomeCarousel from "../../components/HomeCarousel";
import CurrentlyItem from "../../components/HomeCurrentlyItem";
import HomePolicy from "../../components/HomePolicy";
import CurrentlyList from "../../components/HomeCurrentlyList";
// HomeList.propTypes = {};

function HomeList(props) {
  const [home, setHome] = useState([]);
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    const endpoint = "/store";
    const fetchData = async () => {
      let response = await api.get(endpoint);
      let crItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "sp-hien-tai");
      });
      setHome(response.data);
      setCurrent(crItem);
    };
    fetchData();
    // const fetchData = async () => {
    //   let response = await api.get(endpoint);
    //   setHome(response.data);
    // };
    // fetchData();
  }, []);
  return (
    <div className="home">
      <div className="home-carousel">
        <HomeCarousel />
      </div>
      <div className="policy-home">
        <HomePolicy />
      </div>
      <div className="currently-home">
        <h3 className="txt-currently-product">Sản phẩm hiện tại</h3>
        <CurrentlyList currentList={current} />
      </div>
    </div>
  );
}

export default HomeList;
