import React, { useEffect, useCallback } from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Півпрозорий чорний колір */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Забезпечує, що модальне вікно буде поверх усіх інших елементів */
`;

const ModalContent = styled.div`
position: relative;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

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
    <ModalBackdrop onClick={handleCloseModal}>
      <ModalContent>
        <CloseButton onClick={onCloseModal}>&times;</CloseButton>
        {/* Додайте тут вміст модального вікна */}
        <img
                    src={car.img}
                    alt={`${car.model}`}
                    style={{ height: "280px" }}
                  />
        <h2>{car.make} {car.model}</h2>
        <p>Year: {car.year}</p>
        <p>Rental Price: {car.rentalPrice}</p>
        {/* Приклад виводу деякої інформації про машину */}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default CarModal;




// // import React from 'react';
// import styled from 'styled-components';

// const ModalContainer = styled.div`
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   max-width: 400px;
//   margin: 0 auto;
// `;

// const CloseButton = styled.button`
//   background-color: #ff6347;
//   color: #ffffff;
//   border: none;
//   border-radius: 4px;
//   padding: 8px 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ff4837;
//   }
// `;

// const CarModal = ( {car, onCloseModal }) => {
//   return (
//     <ModalContainer>
//       <h2>{car.make} {car.model}</h2>
//       <p>Year: {car.year}</p>
//       <p>Rental Price: {car.rentalPrice}</p>
//       <p>Color: {car.color}</p>
//       {/* Add other properties you want to display */}
//       <CloseButton onClick={onCloseModal}>Close</CloseButton>
//     </ModalContainer>
//   );
// };

// export default CarModal;



