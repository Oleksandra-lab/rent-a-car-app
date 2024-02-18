import logo from "/car-rent-icon.svg";
import { HeaderContainer, StyledHeader, StyledLogo } from "./Header.styled";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
      <StyledLogo to="/">
        <img src={logo} alt="Logo" width={50} to="/"/>
        <p>Rent a car</p>
      </StyledLogo>

      <Navigation />

      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
