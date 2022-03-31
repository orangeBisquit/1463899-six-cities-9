import {Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login';
import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/not-found/not-found';
import {AppRoute} from '../../utils/const';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckedAuth} from '../../utils/utils';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-router';
import Property from '../../pages/property/property';

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
