import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type TPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
}

export default function PrivateRoute({
  authorizationStatus,
  redirectTo,
  children
}: TPrivateRouteProps) {
  const status = AuthorizationStatus.NoAuth; // NoAuth is correct

  return authorizationStatus === status ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}
