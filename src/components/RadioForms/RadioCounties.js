import React from "react";

import NextButton from "../buttons/NextButton";

const RadioCounties = props => {
  const { chosenCounties, regionCounty, setRegionCounty } = props;

  const onRadioClick = e => {
    const county = e.target.value;
    setRegionCounty(prevValues => {
      return {
        ...prevValues,
        county
      };
    });
  };

  const renderCounty = county => {
    return (
      <div className="form-check radio-input" key={county}>
        <label
          className="form-check-label styled-radio-button"
          htmlFor={county}
        >
          <input
            className="form-check-input"
            type="radio"
            id={county}
            name="radioCounties"
            value={county}
            onClick={onRadioClick}
          />
          <span className="checkmark"></span>
          <h6>{county}</h6>
        </label>
      </div>
    );
  };

  let button = "";
  if (regionCounty.county !== null) {
    button = <NextButton />;
  }

  return (
    <>
      <div className="greeting">
        <h4>V jakém okrese?</h4>
      </div>
      <section className="radio-section">
        {chosenCounties.map(renderCounty)}
      </section>
      {button}
    </>
  );
};

export default RadioCounties;
