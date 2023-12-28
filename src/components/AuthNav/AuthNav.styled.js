import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: yellow;
  font-size: 20px;

  &:hover {
    color: greenyellow;
  }
  &.active {
    color: greenyellow;
  }
`;