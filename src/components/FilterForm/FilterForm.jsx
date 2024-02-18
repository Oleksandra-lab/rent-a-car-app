import { Button, Input, StyledFilterForm } from "./FilterForm.styled";


const FilterForm = () => {
  return (
    <StyledFilterForm>
      <div>
        <label htmlFor="carBrand" className="label">
          Car brand
          <Input id="carBrand" type="text" placeholder="Enter the text" />
        </label>
      </div>

      <div>
        <label htmlFor="price" className="label">
          Price/ 1 hour
          <Input id="price" type="text" placeholder="To" />
        </label>
      </div>

      <div>
        <label htmlFor="mileageFrom" className="label">
          Car mileage / km
          <Input id="mileageFrom" type="text" placeholder="From" />
        </label>
        <label htmlFor="mileageTo" className="label">
          <Input id="mileageTo" type="text" placeholder="To" />
        </label>
      </div>

      <Button type="submit">Search</Button>
    </StyledFilterForm>
  );
};

export default FilterForm;


