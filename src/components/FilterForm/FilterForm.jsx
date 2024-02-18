// import React from "react";
import { StyledFilterForm} from "./FilterForm.styled";

const FilterForm = () => {
  return (
    <StyledFilterForm action="">
      <label htmlFor="" className="label">
        Car brand
        <input type="text" placeholder="Enter the text" />
      </label>

      <label htmlFor="" className="label">
        Price/ 1 hour
        <input type="text" placeholder="To" />
      </label>

      <label htmlFor="" className="label">
        Сar mileage / km
        <input type="text" placeholder="From " />
        <input type="text" placeholder="To" />
      </label>

      <button type="submit">Search</button>
    </StyledFilterForm>
  );
};

export default FilterForm;