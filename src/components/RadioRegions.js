import React from "react";

import czechRegions from "../data/czechRegions";

const RadioRegions = () => {
  return (
    <>
      <section className="container">
        {czechRegions.map((region, index) => (
          <div class="form-check form-check">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              {region.title}
            </label>
          </div>
        ))}
      </section>
    </>
  );
};

export default RadioRegions;
