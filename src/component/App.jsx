import React, { useEffect, useState } from "react";

import Footer from "./footer";
import Navbar from "./Navbar";
import axios from "axios";


import FilterCarousel from "./Filternav";
import MainFilter from "./mainfilter";
import StayImages from "./StayImages";

function App() {
  const [Value, setValue] = useState([]);

  const [Datum, setDatum] = useState("");

  const [currentFilter, setCurrentFilter] = useState({});

  useEffect(() => {}, [currentFilter]);
  useEffect(() => {}, [Datum]);

  // API call for whole Database record
  useEffect(() => {
    axios
      .get("http://localhost:8082/getAllStay")
      .then((response) => {
        if (response.data.status === "OK") {
          setValue(response.data.result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //API call for total count
  useEffect(() => {
    axios
      .get("http://localhost:8082/count")
      .then((response) => {
        if (response.data.status === "OK") {
          setDatum(response.data.result);
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
        setDatum(response.data.result.length);
      }
    } catch (err) {
      console.log(err);
    }
  }
  //PriceFilter
  async function priceFilter(data) {
    try {
      const response = await axios.post("http://localhost:8082/pricefilter", {
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        region: currentFilter.selectregion,
        roomtype: data.roomtypes,
        bedroom: data.noofBath === "Any" ? "" : data.noofBath,
        bathroom: data.noofBedroom === "Any" ? "" : data.noofBedroom,
        bed: data.noofBed === "Any" ? "" : data.noofBed,
        Propertytype: data.propertytype,
        Ammenty: data.ammenty,
      });
      if (response.data.status === "OK") {
        setValue(response.data.result2);
        setDatum(response.data.result2.length);
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
