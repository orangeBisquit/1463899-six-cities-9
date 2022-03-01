import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Property from '../../pages/property/Property';
import Login from '../../pages/login/Login';
import MainPage from '../../pages/mainPage/MainPage';
import Favorites from '../../pages/favorites/Favorites';
import NotFound from '../../pages/notFound/NotFound';
import PrivateRoute from '../privateRoute/PrivateRoute';
import {AppRoute} from '../../utils/const';
import {Offer} from '../../types/offers';
import {Review} from '../../types/reviews';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
}

function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offers={offers}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={<Favorites offers={offers}/>}/>
        <Route path={AppRoute.Offer} element={
          <PrivateRoute isAuthorized>
            <Property offers={offers} reviews={reviews}/>
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
