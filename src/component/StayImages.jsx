import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Paginator } from "primereact/paginator";

function StayImages(props) {
  const [value, setValue] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(40);

  useEffect(() => {
    setValue(props.values);
    console.log(props.values);
  }, [props.values]);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <div className="mainimgdirect">
      {Array.isArray(value) &&
        value.slice(first, first + rows).map((val, index) => {
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

              <div style={{ fontSize: "0.75rem" }}>
                {Math.ceil(val.stayDistance / 1000)}
                <span>KM</span>
              </div>
              <div style={{ fontSize: "0.75rem" }}>
                {val.price.$numberDecimal}
                <span>USD</span>
              </div>
            </div>
          );
        })}
      <div style={{ width: "1200px" }}>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={5555}
          rowsPerPageOptions={[16, 20, 40]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default StayImages;
