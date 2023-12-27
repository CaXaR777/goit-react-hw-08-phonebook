import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  outline: 1px solid grey;
  border-radius: 20px;
  background-color: #d3d3d3;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 4px 12px;
  border-radius: 20px;
  font: inherit;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px grey;
  background-color: orange;
  margin-right: 4px;
  box-shadow: 0 1px 7px grey;

  &:hover,
  &:focus {
    background-color: blueviolet;
    color: #fff;
    transform: scale(1.1);
  }
`;