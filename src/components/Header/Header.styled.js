import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  top: 0;
  
  width: 100%;
  background: linear-gradient(to bottom, white, #646cff);
  
  box-shadow: 0 8px 6px -6px black;
`;

export const HeaderContainer= styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 80px;
`;


export const StyledLogo= styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 36px;
  color: inherit;
`;
