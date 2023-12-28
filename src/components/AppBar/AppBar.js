import { useAuth } from 'hooks/useAuth';
import * as S from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <S.Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </S.Header>
  );
};
