import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectAuthorizationStatus } from '../../store/selectors/authorization';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { logout } from '../../store/api-action';
import { SelectUser } from '../../store/selectors/user';

const getLayoutState = (pathName: AppRoute) => {
  let rootClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathName === AppRoute.Root) {
    rootClassName = 'page--gray page--main';
  } else if (pathName === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  }else if (pathName === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  return {rootClassName, shouldRenderUser, shouldRenderFooter};
};

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const {rootClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute);
  const authorizationStatus = useAppSelector(SelectAuthorizationStatus);
  const user = useAppSelector(SelectUser);

  const dispatch = useAppDispatch();

  const logoutHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(logout());
  };

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            {
              shouldRenderUser &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      {
                        authorizationStatus === AuthorizationStatus.Auth ? (
                          <>
                            <span className="header__user-name user__name">{user?.email}</span>
                            <span className="header__favorite-count">3</span>
                          </>
                        ) : <span className='header_login'>Sign in</span>
                      }
                    </Link>
                  </li>
                  {
                    authorizationStatus === AuthorizationStatus.Auth ? (
                      <li className="header__nav-item">
                        <Link
                          to={AppRoute.Login}
                          className="header__nav-link"
                          onClick={logoutHandler}
                        >
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    ) : null
                  }
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
      <Outlet />
      {
        shouldRenderFooter &&
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      }
    </div>
  );
}

export default Layout;
