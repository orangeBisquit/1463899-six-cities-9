import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const StartSettings = {
  offersCounts: 420,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={StartSettings.offersCounts} offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
