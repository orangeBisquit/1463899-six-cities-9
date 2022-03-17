import {CurrentOfferId, Offer} from '../../types/offers';
import OfferCard from '../offerCard/OfferCard';
import React, {useCallback} from 'react';
import {useAppDispatch} from '../../hooks';
import {setActiveOfferId} from '../../store/action';

type OffersListProps = {
  offers: Offer[];
  handleOfferHover: (offerId: CurrentOfferId) => void;
  activeOffer: CurrentOfferId;
}

function OffersList({offers, handleOfferHover, activeOffer}: OffersListProps) {

  const dispatch = useAppDispatch();

  const onCardHover = useCallback((id: CurrentOfferId) => {

    if (id !== activeOffer) {
      handleOfferHover(id);
      dispatch(setActiveOfferId(id));
    }
  }, []);

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
