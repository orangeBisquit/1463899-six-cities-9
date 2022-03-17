import {capitalizeFirstLetter, getRatingWidth} from '../../utils/utils';
import ReviewList from '../reviewList/ReviewList';
import ReviewForm from '../reviewForm/ReviewForm';
import React, {useState} from 'react';
import {Offer} from '../../types/offers';
import {Review} from '../../types/reviews';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../utils/const';
import {fetchFavoriteOffersAction, fetchOffersAction, toggleFavoriteAction} from '../../store/api-actions';
import {useNavigate} from 'react-router-dom';

type PropertyInfoProps = {
  offer: Offer | null;
  reviews: Review[];
}

function PropertyInfo({offer, reviews}: PropertyInfoProps) {
  const {authorizationStatus} = useAppSelector((state) => state);
  const [isOfferFavorite, setToggleFavorite] = useState(offer?.isFavorite);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();


  // eslint-disable-next-line no-console
  console.log('Favorite: ', isOfferFavorite);

  if (!offer) {
    return null;
  }

  const {
    id,
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    isFavorite,
  } = offer;

  const postFavoriteFlag = isFavorite ? 0 : 1;

  const handleFavoriteClick = () => {
    authorizationStatus !== AuthorizationStatus.Auth && navigate('/login');

    dispatch(toggleFavoriteAction({
      id: offer.id,
      flag: postFavoriteFlag,
    }));

    setToggleFavorite(!isOfferFavorite);

    dispatch(fetchOffersAction());
    dispatch(fetchFavoriteOffersAction());
  };

  const limitedImages = images.slice(0, 6);

  const isFavoriteClasses = `property__bookmark-button ${isOfferFavorite ? 'property__bookmark-button--active' : null} button`;

  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {limitedImages.map((image: string) => (
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
            <button className={isFavoriteClasses} type="button" onClick={handleFavoriteClick}>
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
            {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm/> : null}

          </section>
        </div>
      </div>
    </>
  );
}

export default PropertyInfo;
