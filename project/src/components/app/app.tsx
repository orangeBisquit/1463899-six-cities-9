import {Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/Login';
import MainPage from '../../pages/mainPage/MainPage';
import NotFound from '../../pages/notFound/NotFound';
import {AppRoute} from '../../utils/const';
import Favorites from '../../pages/favorites/Favorites';
import PrivateRoute from '../privateRoute/PrivateRoute';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import {isCheckedAuth} from '../../utils/utils';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/HistoryRouter';
import Property from '../../pages/property/Property';

function App(): JSX.Element {

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={
          <Property/>
        }
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
