import {Offer} from '../../types/offers';
import OfferCard from '../offerCard/OfferCard';

type SimilarOffersProps = {
  similarOffers: Offer[];
  handleOfferHover: (offerId: number | null) => void;
  activeOffer: number | null;
}

function SimilarOffers({similarOffers, handleOfferHover, activeOffer}: SimilarOffersProps) {

  const onCardHover = (id: number) => {
    if (id !== activeOffer) {
      handleOfferHover(id);
    }
  };

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
              onCardHover={onCardHover}
              key={offer.id}
            />))
        }
      </div>
    </section>
  );
}

export default SimilarOffers;
