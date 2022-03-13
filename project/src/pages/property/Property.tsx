import Header from '../../components/header/Header';
import {CurrentOfferId, Offer} from '../../types/offers';
import {useParams} from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import {Review} from '../../types/reviews';
import SimilarOffers from '../../components/similarOffers/SimilarOffers';
import Map from '../../components/map/Map';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCommentsAction, fetchNearbyOffersAction, fetchSingleOfferAction} from '../../store/api-actions';
import PropertyInfo from '../../components/propertyInfo/PropertyInfo';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';

type PropertyProps = {
  offers: Offer[];
  similarOffers: Offer[];
  reviews: Review[];
}

function Property({offers, similarOffers, reviews}: PropertyProps) {
  const [similarActiveOffer, setActiveOffer] = useState<CurrentOfferId>();

  const handleOfferHover = (offerId: CurrentOfferId) => setActiveOffer(offerId);

  const {id: propertyId} = useParams();
  const property = offers.find((elem) => elem.id.toString() === propertyId);

  const {comments, currentOffer, similarOffers: similarOff} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(propertyId));
    dispatch(fetchSingleOfferAction(propertyId));
    dispatch(fetchNearbyOffersAction(propertyId));
  }, []);

  if (!property || !propertyId) {
    return <NotFound/>;
  }

  if (!similarOffers || !currentOffer) {
    return <LoadingScreen/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyInfo offer={currentOffer} reviews={comments}/>
          <section className="property__map map">
            <Map city={currentOffer.city} offers={similarOff} activeOffer={similarActiveOffer}
              mapMods='property__map'
            />
          </section>
        </section>
        <div className="container">
          <SimilarOffers
            similarOffers={similarOff}
            handleOfferHover={handleOfferHover}
            activeOffer={similarActiveOffer}
          />
        </div>
      </main>
    </div>
  );
}

export default Property;
