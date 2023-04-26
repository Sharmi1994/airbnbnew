import React, {  useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";



function StayImages(props) {
  const [value, setValue] = useState([]);

  useEffect(()=>{
    setValue(props.values);
	}, [props.values])


  return (
  
    <div className="mainimgdirect">
      { Array.isArray(value)&&
      value.map((val, index) => {
        return (
          <div className="imgdirect" key={index}>
            <div>
              <img
                className="stayimg"
                src={val.images.picture_url}
                alt="stayimg.png"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: "0.75rem" }}>{val.address.street}</div>
              <div>
                <FaStar />
                {val.review_scores.review_scores_accuracy}
              </div>
            </div>
      
            <div style={{ fontSize: "0.75rem" }}>{Math.ceil(val.stayDistance/1000)}<span>KM</span></div>
            <div style={{ fontSize: "0.75rem" }}>{val.price.$numberDecimal}<span>USD</span></div>
          </div>
        );
      })}
    </div>
  
  );
}

export default StayImages;
