import React, { useState, useRef } from "react";

import { FaSearch } from "react-icons/fa";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import moment from "moment";
import { OverlayPanel } from "primereact/overlaypanel";
import Map from "./map";

import Addguest from "./addguest";
function Detail(props) {
  const op = useRef(null);
  const ope = useRef(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [guestValue, setGuestValue] = useState("");
  const [region, setregion] = useState(true);
  const [selectregion, setselectregion] = useState("");

  //add the guest count
  function handleGuest(value) {
    setGuestValue(
      `${value.Adultcount} adults, ${value.Childrencount} children, ${value.Infantcount} infants, ${value.Petcount} pets`
    );
  }

  //check the date check in and check out
  function handleSearch() {
    if (moment(date2).isBefore(date1)) {
      alert("checkout date cannot be before checkin date");
    } else {
      alert("search successful");
    }
  }

  //set region
  async function handleRegionChange(value) {
      setselectregion(value);
    // setregion(false);
    op?.current?.toggle(value);
  }


  async function handleSubmit(e) {
    handleSearch();
    e.preventDefault();
  props.handleCallBack({selectregion,date1, date2, guestValue})

  }

  return (
    <div>
      <div className=" row details">
        {" "}
        <div>Stays</div>
        <div>Experiences</div>
        <div>Online Experiences</div>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="row search2">
          <div>
            <div> Where</div>
            <div>
              {" "}
              <input
                className="inputdesign"
                type="text"
                placeholder="Search Destinations"
                value={selectregion}
                onChange={function (event) {
                  setselectregion(event.target.value);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  op?.current?.toggle(e);
                }}
              />
              {region && (
                <OverlayPanel ref={op}>
                  <Map onRegionChange={handleRegionChange} />
                </OverlayPanel>
              )}
            </div>
          </div>

          <div>
            Check In
            <div className="card flex justify-content-center calendar">
              <Calendar
                value={date1}
                className="custom-calendar"
                placeholder="Add Dates"
                onChange={(e) => setDate1(e.value)}
              />
            </div>
          </div>

          <div>
            Check Out
            <div className="card flex justify-content-center">
              <Calendar
                value={date2}
                className="custom-calendar"
                placeholder="Add Dates"
                onChange={(e) => setDate2(e.value)}
              />
            </div>
          </div>

          <div>
            <div>Who</div>
            <input
              className="inputdesign"
              type="text"
              placeholder="Add Guests"
              value={guestValue}
              onClick={(e) => {
                ope.current.toggle(e);
              }}
            />
            <OverlayPanel ref={ope}>
              <Addguest onmemberAdd={handleGuest} />
            </OverlayPanel>
          </div>

          <button
            className="btn-lg btn-danger"
            onClick={handleSearch}
            type="submit"
          >
            {" "}
            Search <FaSearch />
          </button>

          {/* <div className="search-icon2" onClick={handleSearch}>
          Search
          <FaSearch />
        </div> */}
        </div>
      </form>
    </div>
  );
}

export default Detail;
