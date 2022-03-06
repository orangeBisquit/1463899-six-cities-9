import React, {useState} from 'react';
import Header from '../../components/header/Header';
import Tabs from '../../components/tabs/Tabs';
import OffersList from '../../components/offersList/OffersList';
import MainPageEmpty from './MainPageEmpty/MainPageEmpty';
import Map from '../../components/map/Map';
import {State} from '../../types/store';
import {capitalizeFirstLetter} from '../../utils/utils';
import {getCityOffers} from '../../utils/filter';
import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/offers';
import SortOffers from '../../components/sortOffers/SortOffers';
import {sortOffers} from '../../utils/sort';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps) {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const {city, sortType} = useAppSelector((state: State) => state);
  const filderedOffers = getCityOffers(city, offers);
  const sortedOffers = sortOffers(sortType, filderedOffers);
  const handleOfferHover = (offerId: number | null) => setActiveOffer(offerId);

  if (!offers || offers.length <= 0) {
    return <MainPageEmpty/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs city={city} onCityChange={handleOfferHover}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {capitalizeFirstLetter(city)}</b>
              <SortOffers/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortedOffers} handleOfferHover={handleOfferHover} activeOffer={activeOffer}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={filderedOffers[0].city} offers={filderedOffers} activeOffer={activeOffer}
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
