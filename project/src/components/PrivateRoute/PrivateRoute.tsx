import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../utils/const';


type IsAuthorized = boolean;

type PrivateRouteProps = {
  isAuthorized?: IsAuthorized;
  children: JSX.Element;
};

function PrivateRoute({isAuthorized = false, children}: PrivateRouteProps) {
  return isAuthorized ? children : <Navigate to={AppRoute.Login}/>;
}

export default PrivateRoute;

