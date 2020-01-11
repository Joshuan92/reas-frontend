import React from "react";
import CountryCounties from "./components/RadioForms/RadioRegions";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <CountryCounties />
      </div>
    </>
  );
};

export default App;
