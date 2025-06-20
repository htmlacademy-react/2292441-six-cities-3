import { AUTH_TOKEN_KEY_NAME } from '../const';
import { Token } from '../types/token';

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
