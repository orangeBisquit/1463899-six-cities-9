import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const StartSettings = {
  offersCounts: 420,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={StartSettings.offersCounts}/>
  </React.StrictMode>,
  document.getElementById('root'));
