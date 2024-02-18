import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/Cars/carsSlice";
import {
  selectCars,
  selectError,
  selectIsLoading,
} from "../../redux/Cars/selectors";

import Loader from "../../components/Loader/Loader";
import { CarCatalogContainer, CarItem, CarList } from "./CatalogPage.styled";
import CarModal from "../../components/CarModal/CarModal";
import FilterForm from "../../components/FilterForm/FilterForm";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

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

  const handleLearnMore = (carId) => {
    setModalIsOpen((prevState) => ({
      ...prevState,
      [carId]: true
    }));
  };



  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchCars(nextPage));
    setPage(nextPage);
  };

  return (
    <div>
      <FilterForm />
      <CarCatalogContainer>
        <CarList>
          {carArr &&
            cars.map((car) => (
              <CarItem key={car.id}>
                <div className="img-wrapper">
                  <img
                    src={car.img}
                    alt={`${car.model}`}
                    style={{ height: "280px" }}
                  />
                  <svg
                    fill="none"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="heart"
                  >
                    <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
                  </svg>
                </div>
                <div className="item-title">
                  <h2 className="item-title-text">
                    {car.make} <span>{car.model}</span>, {car.year}
                  </h2>
                  <h2 className="item-title-text">{car.rentalPrice}</h2>
                </div>
                <button
                  type="button"
                  className="more-btn"
                  onClick={() => handleLearnMore(car.id)}
                  
                >
                  Learn more
                </button>
                {modalIsOpen [car.id] && (
                  
                    <CarModal                    
                    car={car}
                    onCloseModal={() => setModalIsOpen({})}
                    />
                  
                )}
              </CarItem>
            ))}
          {!carArr && <div>No cars available</div>}
        </CarList>
        {/* {endIndex < cars.length && ( */}
        <button type="button" className="load-btn" onClick={handleLoadMore}>
          Load more
        </button>
        {/* )} */}
      </CarCatalogContainer>
    </div>
  );
};

export default CatalogPage;
