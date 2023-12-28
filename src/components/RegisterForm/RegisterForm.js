import { useDispatch } from 'react-redux';
import { register } from '../../redux/authorization/operations';
import * as S from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <S.Form onSubmit={handleSubmit} autoComplete="off">
      <S.Label>
        Username
        <S.Input type="text" name="name" />
      </S.Label>
      <S.Label>
        Email
        <S.Input type="email" name="email" />
      </S.Label>
      <S.Label>
        Password
        <S.Input type="password" name="password" />
      </S.Label>
      <S.Button type="submit">Register</S.Button>
    </S.Form>
  );
};
