import {Offer} from '../../types/offers';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from './favorites-empty/favorites-empty';
import {useAppSelector} from '../../hooks';

function Favorites() {
  const {favoriteOffers, authorizationStatus} = useAppSelector((state) => state);

  if (!favoriteOffers || favoriteOffers.length <= 0) {
    return <FavoritesEmpty/>;
  }

  const getUniqueCities = (offerItems: Offer[]) => {

    const cities = new Set<string>();
    offerItems.forEach((offer) => {
      cities.add(offer.city.name);
    });
    return Array.from(cities).sort();
  };

  const uniqueCitites = getUniqueCities(favoriteOffers);

  const getFilteredOffers = (offerItems: Offer[], city: string) => offerItems.filter((offer) => offer.city.name === city);

  return (
    <div className="page">
      <Header authorizationStatus={authorizationStatus}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                uniqueCitites.map((city) => {
                  const filteredOffers = getFilteredOffers(favoriteOffers, city);
                  return (
                    <FavoritesList city={city} key={city} offers={filteredOffers}/>
                  );
                })
              }

            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
