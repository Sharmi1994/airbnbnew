import React from "react";

import Footer from "./footer";
import Navbar from "./Navbar";

import FilterCarousel from "./Filternav";
import MainFilter from "./mainfilter";
import StayImages from "./StayImages";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
     
      <div className="filterdiv">
        <div className="col0" >
          <FilterCarousel />
        </div>{" "}
        <div className="col">
          <MainFilter />
        </div>
      </div>
      <hr />
     
 
      <StayImages />
      <Footer />
    </div>
  );
}
export default App;
