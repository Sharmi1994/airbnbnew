import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import axios from "axios";

function StayImages() {
  const [value, setValue] = useState([]);
  axios
    .get("http://localhost:8082")
    .then((response) => {
      setValue(response.data.styimges);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="mainimgdirect">
      {value.map((img, index) => {
        return (
          <div className="imgdirect">
            <div>
              <img
                className="stayimg"
                key={index}
                src={img.images.picture_url}
                alt="stayimg.png"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{fontSize:"0.75rem"}}>{img.address.street}</div>
              <div>
                <FaStar />
                Rating
              </div>
            </div>
            <div>Date</div>
            <div>Cost</div>
          </div>
        );
      })}
    </div>
  );
}

export default StayImages;
