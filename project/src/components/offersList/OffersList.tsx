import {Offer} from '../../types/offers';
import OfferCard from '../offerCard/OfferCard';
import React, {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps) {
  const [activeCard, setActiveCard] = useState(0);

  const onCardHover = (id: number) => {
    if (id !== activeCard) {
      setActiveCard(id);
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
          />
        ),
      )}
    </>
  );
}

export default OffersList;
