import React from "react";

const RadioCounties = props => {
  const { chosenRegion, chosenCounties } = props;
  console.log(props);

  const renderCounty = county => (
    <div className="form-check form-check radio-input">
      <input
        className="form-check-input"
        type="radio"
        id={county}
        name="inlineRadioOptions"
        value={county}
      />
      <label className="form-check-label" htmlFor={county}>
        <h6>{county}</h6>
      </label>
    </div>
  );

  return <>{chosenCounties.map(renderCounty)}</>;
};

export default RadioCounties;
