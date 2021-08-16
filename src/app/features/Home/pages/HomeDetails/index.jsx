import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import api from "../../../../api/apiService";
// import PropTypes from "prop-types";

import FooterDetail from "../../components/Detail/FooterDetail";
import ListProduct from "../../components/Detail/ListProduct";

HomeDetail.propTypes = {};

function HomeDetail(props) {
  const [detail, setDetail] = useState({});
  const [all, setAll] = useState([]);
  const params = useRouteMatch().params.key;
  const [array, setArray] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const endpoint = "/store";
    const fetchData = async () => {
      let response = await api.get(endpoint);

      let detailFilter = response.data.find((b) => b.key == params);

      let allItem = response.data.filter((store) => {
        return store.cate.some((val) => val === "all");
      });

      allItem = allItem.slice(0, 5);
      setAll(allItem);

      setDetail(detailFilter);

      let newArray = [];
      response.data.map((item) => {
        let obj = {
          title: item.title,
          key: item.key,
          image: item.image,
          slug: item.slug,
        };
        newArray.push(obj);
        return item;
      });
      setArray(newArray);
    };
    fetchData();
  }, []);
  return (
    <div className="home-detail">
      <ListProduct data={detail} listProduct={all} info={array} />
    </div>
  );
}

export default HomeDetail;
