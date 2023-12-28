import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authorization/operations';
import * as S from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <S.Form onSubmit={handleSubmit} autoComplete="off">
      <S.Label>
        Email
        <S.Input type="email" name="email" />
      </S.Label>
      <S.Label>
        Password
        <S.Input type="password" name="password" />
      </S.Label>
      <S.Button type="submit">Log In</S.Button>
    </S.Form>
  );
};
