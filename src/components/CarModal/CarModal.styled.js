import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;  
`;

export const ModalContent = styled.div`

  position: relative;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  width: 541px;
  overflow: auto;

  .modal-img-wrapper {
    position: relative;
    height: 268px;
    margin-bottom: 14px;
    overflow: hidden;
    border-radius: 14px;

    img {

      height: 248px;
      object-fit: cover;
    }
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  
  .modal-title-text {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 500;
    text-align: start;

  }
  span {
    color: #3470ff;
  }

  .conditions {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    gap: 8px;
     
    li {
      display: flex;
      padding: 7px 14px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 35px;
      background: #f9f9f9;
      span {
        color: blue;
      }
    }
  }
    
  .link-button{
    display: flex;
    width: 168px;
    height: 44px;
    border-radius: 12px;
    background-color: #3470ff;
    border: none;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    color: #fff;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 1001; 
`;



