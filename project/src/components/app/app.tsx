import {BrowserRouter, Route, Routes} from 'react-router-dom';
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

type AppProps = {
  similarOffers: Offer[];
  reviews: Review[];
}

function App({similarOffers, reviews}: AppProps): JSX.Element {

  const {offers} = useAppSelector((state: State) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offers={offers}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={<Favorites offers={offers}/>}/>
        <Route path={AppRoute.Offer} element={
          <PrivateRoute isAuthorized>
            <Property offers={offers} reviews={reviews} similarOffers={similarOffers}/>
          </PrivateRoute>
        }
        >
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
