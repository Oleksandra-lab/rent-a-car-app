import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageContainer = styled.div`
position: relative;
  background-image: url('https://img.freepik.com/free-photo/brand-new-car-ai-generated-image_268835-5688.jpg?w=900&t=st=1708264219~exp=1708264819~hmac=9fe45104fdd5f8400c8b414bc0df22107fcd3022d809407e5c1f38c3914b17ba'); /* Додайте шлях до вашого фонового зображення */
  background-size: cover;
  background-position: center;
  height: 100vh;
  
  width: 100%;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  color: #fff;
`;

export const Slogan = styled.h1`

font-size: 5rem; 
font-style: italic;
color: #007bff;
margin-bottom: 20px;
text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
-webkit-text-stroke: 1px black; 
  margin-bottom: 10px;
`;
export const CompanyName = styled.h1`

font-size: 8rem; 
font-style: italic;
color: #007bff;
margin-bottom: 20px;
text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
-webkit-text-stroke: 1px white; 
  margin-bottom: 80px;
`;

export const Button = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.3rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ContentContainer = styled.div`

position: absolute;
margin-top: 60px;
margin-left: 60px;
flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: #fff;

`