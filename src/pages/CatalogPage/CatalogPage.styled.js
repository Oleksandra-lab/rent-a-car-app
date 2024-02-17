import styled from "styled-components";

export const CarCatalogContainer = styled.div`
  margin: 20px;
`;


export const CarList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 29px;
`;

export const CarItem = styled.div`
  border: 1px solid #ccc;
  width: 274px;
  padding: 10px;
  background-color: #f9f9f9;

  .item-title{
    display: flex;
    justify-content: space-between;
  }

  .item-title-text {
    margin-top: 14px;
    font-size: 16px;
    font-family: Manrope;
    font-weight: 500;
   
    
  }
  span {
    color: #3470FF;
  }
`;
