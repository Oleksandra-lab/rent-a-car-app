import styled from 'styled-components';


export const StyledFilterForm = styled.form`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center;
  padding: 20px 40px;
  max-width: 1280px;
  margin: 5px auto;
  background-color: #ffffff;
  
`;


export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #b0c4de;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4b8bf5;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #357bd8;
  }
`;