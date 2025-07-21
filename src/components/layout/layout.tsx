import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Outlet } from 'react-router-dom';
import { useLayoutState } from '../../hooks/use-layout-state';
import { memo } from 'react';
import ErrorPopup from '../error-popup';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectErrors } from '../../store/slices/errors-data/selectors';

function Layout(): JSX.Element {
  const MemoizedLink = memo(Link);
  const {user, favorites, isAuthorized, rootClassName, shouldRenderFooter, shouldRenderUser, handleLogoutClick} = useLayoutState();
  const errors = useAppSelector(selectErrors);

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <MemoizedLink to={AppRoute.Root} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </MemoizedLink>
            </div>
            {
              shouldRenderUser &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <MemoizedLink to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${ user ? user.avatarUrl : '../img/avatar.svg'})`}}>
                      </div>
                      {
                        isAuthorized ? (
                          <>
                            <span className="header__user-name user__name">{user?.email}</span>
                            <span className="header__favorite-count">{favorites.length}</span>
                          </>
                        ) : <span className='header_login'>Sign in</span>
                      }
                    </MemoizedLink>
                  </li>
                  {
                    isAuthorized ? (
                      <li className="header__nav-item">
                        <MemoizedLink
                          to={AppRoute.Login}
                          className="header__nav-link"
                          onClick={handleLogoutClick}
                        >
                          <span className="header__signout">Sign out</span>
                        </MemoizedLink>
                      </li>
                    ) : null
                  }
                </ul>
              </nav>
            }
          </div>
        </div>
      </header>
      {errors ? <ErrorPopup errors={errors}/> : null}
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
