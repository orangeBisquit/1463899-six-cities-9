import {Offer} from '../../types/offers';
import OfferCard from '../offerCard/OfferCard';
import React from 'react';

type OffersListProps = {
  offers: Offer[];
  handleOfferHover: (offerId: number | null) => void;
  activeOffer: number | null;
}

function OffersList({offers, handleOfferHover, activeOffer}: OffersListProps) {

  const onCardHover = (id: number) => {
    if (id !== activeOffer) {
      handleOfferHover(id);
    }
  };

  return (
    <>
      {offers.map((offer) =>
        (
          <OfferCard
            offer={offer}
            key={offer.id}
            onCardHover={onCardHover}
            cardMods='cities__place-card'
            imageMods='cities__place-card'
          />
        ),
      )}
    </>
  );
}

export default OffersList;
