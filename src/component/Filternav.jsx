import React from "react";

import { Carousel } from "primereact/carousel";
import Filters from "../Filters";

function FilterCarousel() {
  const items = Filters.map((item, index) => ({
    key: index,
    className: `item${index}`,
    Filtersrc: item.src,
    Filtervalue: item.value,
  }));



  const Filtertemplate = (item) => {
    return (
      <div className="d-inline-block ">
        <img
          className="filterimg"
          src={item.Filtersrc}
          alt="filterimg.png"
        />{" "}
        <div className="filtername">{item.Filtervalue}</div>
      </div>
    );
  };

  return (
    <Carousel
      value={items}
      numVisible={10}
      numScroll={5}
      showIndicators={false}
      // responsiveOptions={[
      //   {
      //     breakpoint: "1024px",
      //     numVisible: 10,
      //     numScroll: 5,
      //   },
      //   {
      //     breakpoint: "768px",
      //     numVisible: 5,
      //     numScroll: 10,
      //   },
      // ]}
      className="filter-carousel"
      itemTemplate={Filtertemplate}
    />
  );
}

export default FilterCarousel;
