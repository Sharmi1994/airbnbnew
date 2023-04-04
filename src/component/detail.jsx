import React, { useState, useRef } from "react";

import { FaSearch } from "react-icons/fa";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SearctDest from "./SearchDest";
import moment from "moment";
import { OverlayPanel } from "primereact/overlaypanel";

import Addguest from "./addguest";
function Detail() {
  const op = useRef(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);



  const [guestValue, setGuestValue] = useState("");

  function handleGuest(value) {
  

    setGuestValue(
      `${value.Adultcount} adults, ${value.Childrencount} children, ${value.Infantcount} infants, ${value.Petcount} pets`
    );
  }

  function handleSearch() {
    if (moment(date2).isBefore(date1)) {
      alert("checkout date cannot be before checkin date");
    } else {
      alert("search successful");
    }
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

      <div className="row search2">
        <div>
          <div> Where</div>

          <SearctDest />
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
              op.current.toggle(e);
            }}
          />
          <OverlayPanel ref={op}>
            <Addguest onmemberAdd={handleGuest} />
          </OverlayPanel>
        </div>

        <div className="search-icon2" onClick={handleSearch}>
          Search
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default Detail;
