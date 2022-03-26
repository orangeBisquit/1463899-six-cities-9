import {Offer} from '../../types/offers';
import OfferCard from '../offerCard/OfferCard';

type SimilarOffersProps = {
  similarOffers: Offer[];
}

function SimilarOffers({similarOffers}: SimilarOffersProps) {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          similarOffers.map((offer) => (
            <OfferCard
              offer={offer}
              cardMods='near-places__card'
              imageMods='near-places__image-wrapper'
              key={offer.id}
            />))
        }
      </div>
    </section>
  );
}

export default SimilarOffers;
