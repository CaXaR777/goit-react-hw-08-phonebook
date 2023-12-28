import styled from 'styled-components';

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: blueviolet;
  input {
    width: 200px;
    padding: 2px;
    margin-top: 6px;
    border: 1px solid rgb(219, 216, 216);
    border-radius: 2px;
    &:focus {
      border-color: rgb(99, 149, 241, 0.6);
      outline: 2px rgba(99, 149, 241, 0.6);
      outline-style: solid;
    }
  }
`;
export const Text = styled.p`
  margin-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
