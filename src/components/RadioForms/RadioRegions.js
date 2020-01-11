import React, { useState } from "react";

import RadioCounties from "./RadioCounties";

import czechRegions from "../../data/czechRegions";

const RadioRegions = () => {
  const [region, setRegion] = useState({ region: "", index: null });

  const onRadioClick = e => {
    const region = e.target.value;
    const index = e.target.id;
    setRegion(prevValues => {
      return {
        ...prevValues,
        index,
        region
      };
    });
  };

  const renderRegion = (region, index) => (
    <div className="form-check form-check radio-input" key={index}>
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id={`${index}`}
        value={region.title}
        onClick={onRadioClick}
      />
      <label className="form-check-label" htmlFor={`${index}`}>
        <h6>{region.title}</h6>
      </label>
    </div>
  );

  let content = "";

  if (region.index != null) {
    content = (
      <RadioCounties
        chosenRegion={region}
        chosenCounties={czechRegions[region.index].counties}
      />
    );
  }

  return (
    <>
      <div className="greeting">
        <h3>Kde se nachází Vaše nemovitost?</h3>
        <p>Klikněte na kraj a následně na okres.</p>
      </div>
      <section className="radio-section">
        {czechRegions.map(renderRegion)}
        {content}
      </section>
    </>
  );
};

export default RadioRegions;
