import React from "react";

const RadioCounties = props => {
  const { chosenCounties } = props;
  console.log(props);

  const renderCounty = county => {
    return (
      <div className="form-check radio-input">
        <label
          className="form-check-label styled-radio-button"
          htmlFor={county}
        >
          <input
            className="form-check-input "
            type="radio"
            id={county}
            name="radioCounties"
            value={county}
          />
          <span className="checkmark"></span>
          <h6>{county}</h6>
        </label>
      </div>
    );
  };

  return (
    <>
      <div className="greeting">
        <h4>V jakém okrese?</h4>
      </div>
      <section className="radio-section">
        {chosenCounties.map(renderCounty)}
      </section>
    </>
  );
};

export default RadioCounties;
