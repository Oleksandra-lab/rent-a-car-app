import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/Cars/selectors';
import { CarCard, CarInfo, CardTitle, FavoritePageContainer } from './FavoritePage.styled';


const FavoritePage = () => {
  const cars = useSelector(selectCars);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites'));
    if (favoritesFromStorage && typeof favoritesFromStorage === 'object') {
      const favoriteCarIds = Object.keys(favoritesFromStorage);
      setFavoriteCars(favoriteCarIds);
    } else {
      setFavoriteCars([]);
    }
  }, []);

  const getCarById = (carId) => {
    return cars.find((car) => car.id === carId);
  };

  return (
    <FavoritePageContainer>
      <h1>Cars you liked</h1>
      <div>
        {favoriteCars.map((carId) => {
          const car = getCarById(carId);
          if (!car) return null;
          return (
            <CarCard key={carId}>
              <CardTitle>{car.make} {car.model}</CardTitle>
              <CarInfo>Year: {car.year}</CarInfo>
              <CarInfo>Type: {car.type}</CarInfo>
            </CarCard>
          );
        })}
      </div>
    </FavoritePageContainer>
  );
};

export default FavoritePage;



