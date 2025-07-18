import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectAuthorizationStatus } from '../../store/slices/auth-process/selectors';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';

type PublicRouteProps = {
  children: JSX.Element;
}

function PublicRoute({ children }: PublicRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(SelectAuthorizationStatus);

  return authorizationStatus !== AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Root} />;
}

export default PublicRoute;
