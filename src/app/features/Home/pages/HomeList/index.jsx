import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import "./style.scss";
import api from "../../../../api/apiService";
import HomeCarousel from "../../components/Home/HomeCarousel";

import HomePolicy from "../../components/Home/HomePolicy";
import CurrentlyList from "../../components/Home/HomeCurrentlyList";
import HomeImage from "../../components/Home/HomeImage";
import PopularList from "../../components/Home/HomePopularList";
import HomeVoucher from "../../components/Home/HomeVoucher";
import HomeBottom from "../../../Home/components/Home/HomeBottom";
import AOS from "aos";
import "aos/dist/aos.css";
// HomeList.propTypes = {};

function HomeList(props) {
  AOS.init();
  const [home, setHome] = useState([]);
  const [current, setCurrent] = useState([]);
  const [popular, setPopular] = useState([]);
  const [news, setNewHome] = useState([]);
  const [sale, setSale] = useState([]);
  const [alot, setAlot] = useState([]);
  const [opt, setOpt] = useState([]);

  useEffect(() => {
    const endpoint = "/store";
    const fetchData = async () => {
      let response = await api.get(endpoint);
      let crItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "sp-hien-tai");
      });
      let popItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "sp-pho-bien");
      });
      let saleItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "sale");
      });
      saleItem = saleItem.slice(0, 3);

      let newItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "sp-moi");
      });
      newItem = newItem.slice(0, 3);

      let alotItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "sp-mua-nhieu");
      });
      alotItem = alotItem.slice(0, 3);

      let optItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "sp-tu-chon");
      });
      optItem = optItem.slice(0, 3);
      // setPopular(response.data);
      setHome(response.data);
      setCurrent(crItem);
      setPopular(popItem);
      setSale(saleItem);
      setNewHome(newItem);
      setAlot(alotItem);
      setOpt(optItem);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <div className="home-carousel">
        <HomeCarousel />
      </div>
      <div className="policy-home" data-aos="fade-right">
        <HomePolicy />
      </div>
      <div className="currently-home">
        <h3 className="txt-currently-product" data-aos="fade-down">
          Sản phẩm hiện tại
        </h3>
        <CurrentlyList currentList={current} />
      </div>
      <div className="home-image">
        <HomeImage />
      </div>

      <div className="popular-home">
        <h3 className="txt-popular-product" data-aos="fade-down">
          Sản phẩm phổ biến
        </h3>
        <PopularList popList={popular} />
      </div>
      <div className="policy-home" data-aos="fade-right">
        <HomeVoucher />
      </div>
      <div className="home-bottom">
        <HomeBottom
          saleList={sale}
          newList={news}
          alotList={alot}
          optList={opt}
        />
      </div>
    </div>
  );
}

export default HomeList;
