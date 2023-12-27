import styled from 'styled-components';

export const UserBtn = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px grey;
  background-color: orange;
    margin-right: 4px;

  &:hover,
  &:focus {
    color: white;
    background-color: blueviolet;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;