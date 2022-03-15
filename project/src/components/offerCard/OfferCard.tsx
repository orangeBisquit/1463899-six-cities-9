import {Offer} from '../../types/offers';
import {getRatingWidth} from '../../utils/utils';
import {Link} from 'react-router-dom';
import {fetchFavoriteOffersAction, fetchOffersAction, toggleFavoriteAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import {useState} from 'react';
import {resetCurrentOffer} from '../../store/action';

type OfferCardProps = {
  offer: Offer;
  onCardHover?: any;
  cardMods: string;
  imageMods: string;
}

function OfferCard({offer, onCardHover, cardMods, imageMods}: OfferCardProps) {
  const {previewImage, price, rating, isFavorite, title, type, id, isPremium} = offer;

  const [isOfferFavorite, setToggleFavorite] = useState(isFavorite);

  const dispatch = useAppDispatch();

  const postFavoriteFlag = isFavorite ? 0 : 1;

  const handleFavoriteClick = () => {
    dispatch(toggleFavoriteAction({
      id: offer.id,
      flag: postFavoriteFlag,
    }));

    setToggleFavorite(!isOfferFavorite);

    dispatch(fetchOffersAction());
    dispatch(fetchFavoriteOffersAction());
  };

  const handleOfferClick = () => {
    dispatch(resetCurrentOffer());
  };


  const isFavoriteClasses = `place-card__bookmark-button ${isOfferFavorite ? 'place-card__bookmark-button--active' : null} button`;

  return (
    <article className={`${cardMods} place-card`} onMouseOver={() => onCardHover(id)}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className={`${imageMods} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`} onClick={handleOfferClick}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={isFavoriteClasses}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
