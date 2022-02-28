import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Property from '../../pages/property/Property';
import Login from '../../pages/login/Login';
import MainPage from '../../pages/mainPage/MainPage';
import Favorites from '../../pages/favorites/Favorites';
import NotFound from '../../pages/notFound/NotFound';
import PrivateRoute from '../privateRoute/PrivateRoute';
import {AppRoute} from '../../utils/const';
import {Offer} from '../../types/offers';

type AppProps = {
  offersCount: number;
  offers: Offer[];
}

function App({offersCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offersCount={offersCount} offers={offers}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={<Favorites offers={offers}/>}/>
        <Route path={AppRoute.Offer} element={
          <PrivateRoute isAuthorized>
            <Property/>
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
