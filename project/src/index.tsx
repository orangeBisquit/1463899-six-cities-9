import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {similarOffers} from './mocks/similar-offers';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App reviews={reviews} similarOffers={similarOffers}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
