import React from "react";

import Header from "./header";
import Footer from "./footer";
import Navbar from "./Navbar";

import FilterCarousel from "./Filternav";
import MainFilter from "./mainfilter";
import StayImages from "./StayImages";


function App() {
  return (
    <div>
      <Header />
      <hr />
      <Navbar />
      <hr />
      <div className="filterdiv">
        <div className="col" style={{ display: "flex" }}>
          <FilterCarousel />
        </div>{" "}
        <div className="col"><MainFilter/></div>
      </div>

      <hr />
<StayImages/>

      <Footer />
    </div>
  );
}
export default App;
