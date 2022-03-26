import {CurrentOfferId, Offer} from '../../types/offers';
import OfferCard from '../offerCard/OfferCard';
import React, {useCallback} from 'react';
import {useAppDispatch} from '../../hooks';
import {setActiveOfferId} from '../../store/action';

type OffersListProps = {
  offers: Offer[];
  handleOfferHover: (offerId: CurrentOfferId) => void;
}

function OffersList({offers, handleOfferHover}: OffersListProps) {

  const dispatch = useAppDispatch();

  const onCardHover = (id: CurrentOfferId) => {
    handleOfferHover(id);
    dispatch(setActiveOfferId(id));
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
