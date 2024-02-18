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
  border-radius: 14px;
  padding: 10px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 426px;

  .img-wrapper {
    position: relative;
    width: 100%;
    height: 268px;
    margin-bottom: 14px;
    overflow: hidden;
    border-radius: 14px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .heart {
      position: absolute;
      top: 14px;
      right: 14px;
      stroke: white;
      &.favored {
        fill: blue;
        stroke: white;
      }
    }
  }

  .item-title {
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
    color: #3470ff;
  }

  .more-btn {
    display: flex;
    width: 100%;
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
