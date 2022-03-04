import Header from '../../components/header/Header';
import {Offer} from '../../types/offers';
import {useParams} from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import {capitalizeFirstLetter, getRatingWidth} from '../../utils/utils';
import {Review} from '../../types/reviews';
import ReviewForm from '../../components/reviewForm/ReviewForm';
import ReviewList from '../../components/reviewList/ReviewList';
import SimilarOffers from '../../components/similarOffers/SimilarOffers';
import Map from '../../components/map/Map';
import React, {useState} from 'react';

type PropertyProps = {
  offers: Offer[];
  similarOffers: Offer[];
  reviews: Review[];
}

function Property({offers, similarOffers, reviews}: PropertyProps) {

  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleOfferHover = (offerId: number | null) => setActiveOffer(offerId);

  const {id: propertyId} = useParams<{ id: string; }>();
  const property = offers.find((elem) => elem.id.toString() === propertyId);

  if (!property) {
    return <NotFound/>;
  }

  const {id, images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description} = property;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => (
                <div className="property__image-wrapper" key={id.toString() + image}>
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : null}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRatingWidth(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                    Wi-Fi
                  </li>
                  {goods.map((good) => (
                    <li className="property__inside-item" key={id + good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro ?
                    <span className="property__user-status">
                      Pro
                    </span>
                    : null}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={reviews}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={similarOffers[0].city} offers={similarOffers} activeOffer={activeOffer} mapMods='property__map'/>
          </section>
        </section>
        <div className="container">
          <SimilarOffers
            similarOffers={similarOffers}
            handleOfferHover={handleOfferHover}
            activeOffer={activeOffer}
          />
        </div>
      </main>
    </div>
  );
}

export default Property;
