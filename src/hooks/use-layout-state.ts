import { AppRoute, AuthorizationStatus, RequestStatus } from '../const';
import { useAppDispatch } from './use-app-dispatch';
import { useLocation } from 'react-router-dom';
import { MouseEvent } from 'react';
import { logout } from '../store/api-action';
import { useAppSelector } from './use-app-selector';
import { selectUser, selectAuthorizationStatus } from '../store/slices/auth-process/selectors';
import { selectFavorites, selectFavoritesRequestStatus } from '../store/slices/favorites-data/selectors';

export const useLayoutState = () => {
  const user = useAppSelector(selectUser);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const favorites = useAppSelector(selectFavorites);
  const favoritesStatus = useAppSelector(selectFavoritesRequestStatus);
  const isFavoritesEmpty = favoritesStatus === RequestStatus.Success && !favorites.length;

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
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
    if (isFavoritesEmpty) {
      rootClassName = 'page--favorites-empty';
    }
  }

  const handleLogoutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(logout());
  };

  return {user, favorites, isAuthorized, rootClassName, shouldRenderFooter, shouldRenderUser, handleLogoutClick};
};
