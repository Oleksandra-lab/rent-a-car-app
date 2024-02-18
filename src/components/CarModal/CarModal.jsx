import  { useEffect, useCallback } from "react";

import { CloseButton, ModalContent, ModalOverlay } from "./CarModal.styled";

const CarModal = ({ car, onCloseModal }) => {
  const handleCloseModal = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        onCloseModal();
      }
    },
    [onCloseModal]
  );

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    },
    [onCloseModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [handleKeyPress]);

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <ModalContent>
        <CloseButton onClick={onCloseModal}>&times;</CloseButton>
        <div className="modal-img-wrapper">
          <img src={car.img} alt={`${car.model}`} style={{ height: "280px" }} />
        </div>

        <div className="modal-title">
          <h2 className="modal-title-text">
            {car.make} <span>{car.model}</span>, {car.year}
          </h2>
        </div>

        <div className="add-inf-box">
          <p>{car.address.split(",")[1]?.trim()} |</p>
          <p> {car.address.split(",")[2]?.trim()} |</p>
          <p>id: {car.id} |</p>
          <p>Year: {car.year} |</p>
          <p>Type: {car.type}</p>
        </div>
        <div className="add-inf-box" style={{ marginBottom: '16px' }}>
          <p>Fuel consumption: {car.fuelConsumption} |</p>
          <p>Enginesize: {car.engineSize}</p>
        </div>
        <div style={{ marginBottom: '20px' }} >
          <p >{car.description}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px' }}>Accessories and functionalities:</h3>
          <div>
            <div className="add-inf-box">
              <p>{car.functionalities[0]} |</p>
              <p>{car.functionalities[1]} |</p>
              <p>{car.functionalities[2]}</p>
            </div>
            <div className="add-inf-box">
              <p>{car.accessories[0]} |</p>
              <p>{car.accessories[1]} |</p>
              <p>{car.accessories[2]}</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Rental Conditions:</h3>
          <ul className="conditions">
            <li>
              Minimum age:
              <span className="age">
                {car.rentalConditions.match(/\d+/)?.[0]}
              </span>
            </li>
            <li>Valid driver’s license</li>
            <li>Security deposite required</li>
            <li>
              Mileage: <span>{car.mileage}</span>
            </li>
            <li>
              Price: <span>{car.rentalPrice}</span>
            </li>
          </ul>
        </div>
        <a className="link-button" href="tel:+380730000000">
          Rental car
        </a>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CarModal;

