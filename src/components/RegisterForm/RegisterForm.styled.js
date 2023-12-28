import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  outline: 1px solid grey;
  border-radius: 10px;
  background-color: black;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 16px;
  color: aqua;
`;

export const Input = styled.input`
  padding: 4px 12px;
  border-radius: 20px;
  font: inherit;
  cursor: pointer;
  margin-top: 7px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px grey;
  background-color: aqua;
  margin-right: 4px;
  box-shadow: 0 1px 7px grey;

  &:hover,
  &:focus {
    background-color: blueviolet;
    color: #fff;
    transform: scale(1.1);
  }
`;
