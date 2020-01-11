import React, { useState } from "react";

import czechRegions from "../data/czechRegions";

const RadioRegions = () => {
  const [region, setRegion] = useState("");

  console.log(region);

  const renderRegion = (region, index) => (
    <div className="form-check form-check radio-input" key={index}>
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id={`inlineRadion${index}`}
        value={region.title}
      />
      <label className="form-check-label" htmlFor={`inlineRadion${index}`}>
        <h6>{region.title}</h6>
      </label>
    </div>
  );

  return (
    <>
      <section className="radio-section">
        {czechRegions.map(renderRegion)}
      </section>
    </>
  );
};

export default RadioRegions;
