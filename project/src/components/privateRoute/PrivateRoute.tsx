import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

type PrivateRouteProps = {
  isAuthorized?: boolean;
  children: JSX.Element;
};

function PrivateRoute({isAuthorized = false, children}: PrivateRouteProps) {
  return isAuthorized ? children : <Navigate to={AppRoute.Login}/>;
}

export default PrivateRoute;
