import { useAuth } from 'hooks';
import * as S from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <S.LinkNav to="/">Home</S.LinkNav>
      {isLoggedIn && <S.LinkNav to="/contacts">Contacts</S.LinkNav>}
    </nav>
  );
};
