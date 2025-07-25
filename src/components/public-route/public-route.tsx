import { useAppSelector } from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/slices/auth-process/selectors';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import Spinner from '../spinner';

type PublicRouteProps = {
  children: JSX.Element;
}

function PublicRoute({ children }: PublicRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return authorizationStatus !== AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Root} />;
}

export default PublicRoute;
