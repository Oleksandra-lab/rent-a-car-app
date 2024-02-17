import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/Cars/carsSlice';
import { selectCars, selectError, selectIsLoading } from '../../redux/Cars/selectors';

import styled from 'styled-components';

const CarCatalogContainer = styled.div`
  margin: 20px;
`;

const CatalogHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CarList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const CarItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
`;

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const carArr = Array.isArray(cars) && cars.length > 0;
  return    (
    <CarCatalogContainer>
      <CatalogHeader>Car Catalog</CatalogHeader>
      <CarList>
  {carArr && cars.map(car => (
    <CarItem key={car.id}>
      <h3>{car.make} {car.model}</h3>
      <p>Year: {car.year}</p>
    </CarItem>
  ))}
  {!carArr && (
    <div>No cars available</div>
  )}
</CarList>
    </CarCatalogContainer>
  );
}

export default CarsCatalog;