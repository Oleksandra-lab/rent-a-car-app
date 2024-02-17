// import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/Cars/carsSlice";
import {
  selectCars,
  selectError,
  selectIsLoading,
} from "../../redux/Cars/selectors";


import Loader from "../../components/Loader/Loader";
import { CarCatalogContainer, CarItem, CarList } from "./CatalogPage.styled";



const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const carArr = Array.isArray(cars) && cars.length > 0;

  return (
    <div>
      <CarCatalogContainer>
        <CarList>
          {carArr &&
            cars.map((car) => (
              <CarItem key={car.id}>
                <div className="img-item">
                  <img
                    src={car.img}
                    alt={`${car.model}`}
                    style={{ height: "280px" }}
                  />
                </div>
                <div className="item-title">
                  <h2 className="item-title-text">
                    {car.make} <span>{car.model}</span>, {car.year}
                  </h2>
                  <h2 className="item-title-text">{car.rentalPrice}</h2>
                </div>
              </CarItem>
            ))}
          {!carArr && <div>No cars available</div>}
        </CarList>
      </CarCatalogContainer>
    </div>
  );
};

export default CatalogPage;
