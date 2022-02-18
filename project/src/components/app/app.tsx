import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Property from '../Property/Property';
import Login from '../Login/Login';
import MainPage from '../MainPage/MainPage';
import Favorites from '../Favorites/Favorites';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import {AppRoute} from '../../utils/const';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage offersCount={offersCount}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={<Favorites/>}/>
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
