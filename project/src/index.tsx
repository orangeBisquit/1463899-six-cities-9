import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {similarOffers} from './mocks/similar-offers';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} similarOffers={similarOffers}/>
  </React.StrictMode>,
  document.getElementById('root'));
