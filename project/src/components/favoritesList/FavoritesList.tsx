import FavoriteItem from '../favoriteItem/FavoriteItem';
import {Offer} from '../../types/offers';

type FavoritesListProps = {
  city: string;
  offers: Offer[];
}

function FavoritesList({city, offers}: FavoritesListProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">

        {offers.map((offer) => (
          <FavoriteItem offer={offer} key={offer.id}/>
        ))}
      </div>
    </li>
  );
}

export default FavoritesList;
