import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {similarOffers} from './mocks/similar-offers';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} similarOffers={similarOffers}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
