/*import Favorites from '../Favorites/Favorites';*/

/*import Property from '../Property/Property';*/

/*import Login from '../Login/Login';*/

import MainPage from '../MainPage/MainPage';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount}/>
    /*<Login/>*/
    /*<Favorites/>*/
    /*<Property/>*/
  );
}

export default App;
