import React, {useCallback} from 'react';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import OffersList from '../../components/offers-list/offers-list';
import MainPageEmpty from './main-page-empty/main-page-empty';
import Map from '../../components/map/map';
import {State} from '../../types/store';
import {capitalizeFirstLetter} from '../../utils/utils';
import {getCityOffers} from '../../utils/filter';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CurrentOfferId} from '../../types/offers';
import SortOffers from '../../components/sort-offers/sort-offers';
import {sortOffers} from '../../utils/sort';
import {setActiveOfferId} from '../../store/action';

function MainPage() {
  const {city, sortType, activeOfferId, offers, authorizationStatus} = useAppSelector((state: State) => state);
  const dispatch = useAppDispatch();

  const filteredOffers = getCityOffers(city, offers);
  const sortedOffers = sortOffers(sortType, filteredOffers);
  const handleOfferHover = useCallback((offerId: CurrentOfferId) => dispatch(setActiveOfferId(offerId)), []);

  if (!offers || offers.length <= 0) {
    return <MainPageEmpty/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs city={city}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {capitalizeFirstLetter(city)}</b>
              <SortOffers/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortedOffers} handleOfferHover={handleOfferHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={filteredOffers[0].city} offers={filteredOffers} activeOffer={activeOfferId}
                mapMods='cities__map'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default MainPage;
