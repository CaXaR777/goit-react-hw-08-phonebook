import * as S from './UserMenu.styled';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authorization/operations';

import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <S.UserDiv>
      <S.Text>Time for changes, {user.name}</S.Text>
      <S.UserBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </S.UserBtn>
    </S.UserDiv>
  );
};
