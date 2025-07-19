import { useAppDispatch } from './use-app-dispatch';
import { FormEvent, useRef } from 'react';
import { login } from '../store/api-action';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return {loginRef, passwordRef, submitHandler};
};
