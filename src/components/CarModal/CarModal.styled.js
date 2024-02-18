import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* напівпрозорий чорний колір */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* вище, ніж зазвичай має бути контент */
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 1001; /* вище, ніж контент, щоб кнопка завжди була видимою */
`;

export const CarModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const CarModalDetails = styled.div`
  /* Стилі для вмісту модального вікна */
`;


