import React, { useEffect, useState } from "react";

import Footer from "./footer";
import Navbar from "./Navbar";
import axios from "axios";

import FilterCarousel from "./Filternav";
import MainFilter from "./mainfilter";
import StayImages from "./StayImages";

function App() {
  const [Value, setValue] = useState([]);

  const [Datum, setDatum] = useState();

  const [currentFilter, setCurrentFilter] = useState({});

  //API call to count the total no of Stays

  useEffect(() => {
    axios
      .get("http://localhost:8082/count")
      .then((response) => {
        console.log("MainFilter");
        setDatum(response.data.noOfStays);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(currentFilter);
  }, [currentFilter]);

  // API call for whole Database record
  useEffect(() => {
    axios
      .get("http://localhost:8082/getAllStay")
      .then((response) => {
        console.log("StayImages", response);
        if (response.data.status === "OK") {
          setValue(response.data.result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Api call for filtering DB
  async function applyFilter(data) {
    try {
      setCurrentFilter(data);
      const response = await axios.post(
        "http://localhost:8082/getStayByFilter",
        {
          region:
            data.selectregion === "all over the world" ? "" : data.selectregion,
          Checkin: data.date1,
          Checkout: data.date2,
          GuestDetail: data.guestValue,
        }
      );

      if (response.data.status === "OK") {
        setValue(response.data.result);
        setDatum(response.data.count);
      }
    } catch (err) {
      console.log(err);
    }
  }
  //PriceFilter
  async function priceFilter(price) {
    try {

      const response = await axios.post("http://localhost:8082/pricefilter", {
        minPrice:price.minPrice,
        maxPrice: price.maxPrice,
        region: currentFilter.selectregion,
      });
      if (response.data.status === "OK") {
        setValue(response.data.result2);
        setDatum(response.data.count2);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar handleCallback={applyFilter} />
      <hr />

      <div className="filterdiv">
        <div className="col0">
          <FilterCarousel />
        </div>{" "}
        <div className="col">
          <MainFilter Datas={Datum} handleCallback={priceFilter} />
        </div>
      </div>
      <hr />

      <StayImages values={Value} />
      <Footer />
    </div>
  );
}
export default App;
