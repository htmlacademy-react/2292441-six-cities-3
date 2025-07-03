import { AppRoute } from '../const';
import { useAppDispatch } from './use-app-dispatch';
import { useLocation } from 'react-router-dom';
import { MouseEvent } from 'react';
import { logout } from '../store/api-action';
import { useAppSelector } from './use-app-selector';
import { SelectUser } from '../store/selectors/user';
import { SelectAuthorizationStatus } from '../store/selectors/authorization';

export const useLayoutState = () => {
  const user = useAppSelector(SelectUser);
  const authorizationStatus = useAppSelector(SelectAuthorizationStatus);

  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const path = pathname as AppRoute;

  let rootClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (path === AppRoute.Root) {
    rootClassName = 'page--gray page--main';
  } else if (path === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  }else if (path === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  const logoutHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(logout());
  };

  return {user, authorizationStatus, rootClassName, shouldRenderFooter, shouldRenderUser, logoutHandler};
};
