import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 15px;
`;

export const ListItems = styled.li`
  padding: 5px 25px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    background: black;
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }
`;
export const Button = styled.button`
  padding: 1px 4px;
  margin-left: 10px;
  border: 1px solid rgb(219, 216, 216);
  border-radius: 4px;
  cursor: pointer;
  background-color: yellowgreen;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
    rgba(0, 0, 0, 0.2) 0px 1px 0px;
  &:active {
    background-color: red;
  }
`;

export const Name = styled.p`
  font-size: 18px;
  margin-left: 10px;
  color: aqua;
`;

export const Number = styled.p`
  font-size: 18px;
  margin-left: 5px;
  color: red;
`;
