import { Button, CompanyName, ContentContainer, HomePageContainer, Slogan } from './HomePage.styled';


const HomePage = () => {
  return (
    <HomePageContainer>
      <ContentContainer>
        <Slogan>Meet your next adventure</Slogan>
        <Slogan>with</Slogan>
      <CompanyName>Rent a Car</CompanyName>
      <Button to="/catalog">Let's choose a car</Button>

      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
