import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps) {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
