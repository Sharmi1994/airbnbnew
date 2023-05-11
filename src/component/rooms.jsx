import React, { useEffect, useState } from "react";

import Login from "./login";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

function Rooms() {
  const { id } = useParams();

  const [newValue, setnewValue] = useState([]);
  console.log(newValue);

  useEffect(() => {
    IdFilter(id);
  }, [id]);

  async function IdFilter(id) {
    try {
      const response = await axios.get("http://localhost:8082/rooms/" + id);
      if (response.data.status === "OK") {
        setnewValue(response.data.result3);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <React.Fragment>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img
            className="img4"
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
            alt="img2.png"
          ></img>
        </div>
        <div>
          {" "}
          <button 
          className="searchbutton"
          >
            <div>Start Your Search</div>{" "}
            <div 
            className="search-icon"
            >
              <FaSearch />
            </div>
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          {" "}
          <Login />
        </div>
      </nav>
      {Array.isArray(newValue) &&
        newValue.map((obj, index) => {
          return (
            <div key={index}>
              {obj.name}
              <div>
                <img className="stayimg" src={obj.images.picture_url} alt="" />
                <div>address</div>
                <div>
                  KM<span>KM</span>
                </div>
                <div>
                  Price<span>USD</span>
                </div>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default Rooms;
