import {Offer} from '../../types/offers';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import FavoritesList from '../../components/favoritesList/FavoritesList';
import FavoritesEmpty from './FavoritesEmpty/FavoritesEmpty';

/*import FavoritesEmpty from './FavoritesEmpty/FavoritesEmpty';*/

type FavoritesProps = {
  offers: Offer[];
}

function Favorites({offers}: FavoritesProps) {

  if (!offers) {
    return <FavoritesEmpty/>;
  }


  const getUniqueCities = (offerItems: Offer[]) => {

    const cities = new Set<string>();
    offerItems.forEach((offer) => {
      cities.add(offer.city.name);
    });
    return Array.from(cities).sort();
  };

  const uniqueCitites = getUniqueCities(offers);

  const getFilteredOffers = (offerItems: Offer[], city: string) => offerItems.filter((offer) => offer.city.name === city);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                uniqueCitites.map((city) => {
                  const filteredOffers = getFilteredOffers(offers, city);
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
