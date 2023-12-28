import * as S from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <S.AuthLink to="/register">Register</S.AuthLink>
      <S.AuthLink to="/login">Log In</S.AuthLink>
    </div>
  );
};
