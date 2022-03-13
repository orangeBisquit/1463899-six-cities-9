import {Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/Login';
import MainPage from '../../pages/mainPage/MainPage';
import NotFound from '../../pages/notFound/NotFound';
import {AppRoute} from '../../utils/const';
import {Offer} from '../../types/offers';
import {Review} from '../../types/reviews';
import Favorites from '../../pages/favorites/Favorites';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Property from '../../pages/property/Property';
import {useAppSelector} from '../../hooks';
import {State} from '../../types/store';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import {isCheckedAuth} from '../../utils/utils';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/HistoryRouter';

type AppProps = {
  similarOffers: Offer[];
  reviews: Review[];
}

function App({similarOffers, reviews}: AppProps): JSX.Element {

  const {offers} = useAppSelector((state: State) => state);
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index element={<MainPage offers={offers}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={<Favorites offers={offers}/>}/>
        <Route path={AppRoute.Offer} element={
          <PrivateRoute>
            <Property offers={offers} reviews={reviews} similarOffers={similarOffers}/>
          </PrivateRoute>
        }
        >
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
