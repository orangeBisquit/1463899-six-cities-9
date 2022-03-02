import React, {useState} from 'react';
import {Offer} from '../../types/offers';
import Header from '../../components/header/Header';
import Tabs from '../../components/tabs/Tabs';
import OffersList from '../../components/offersList/OffersList';
import MainPageEmpty from './MainPageEmpty/MainPageEmpty';
import Map from '../../components/map/Map';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps) {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleOfferHover = (offerId: number | null) => setActiveOffer(offerId);

  if (!offers || offers.length <= 0) {
    return <MainPageEmpty/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  &nbsp; Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom"> {/*places__options--opened*/}
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} handleOfferHover={handleOfferHover} activeOffer={activeOffer}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={offers[0].city} offers={offers} activeOffer={activeOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default MainPage;
