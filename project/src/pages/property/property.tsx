import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found';
import SimilarOffers from '../../components/similar-offers/similar-offers';
import Map from '../../components/map/map';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCommentsAction, fetchNearbyOffersAction, fetchSingleOfferAction} from '../../store/api-actions';
import PropertyInfo from '../../components/property-info/property-info';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {Offer} from '../../types/offers';

function Property() {
  const {
    comments,
    currentOffer,
    similarOffers,
    offers,
    authorizationStatus,
    activeOfferId,
  } = useAppSelector((state) => state);

  const {id: propertyId} = useParams();
  const property = offers.find((elem) => elem.id.toString() === propertyId);

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

  const mapOffers: Offer[] = [...similarOffers, currentOffer];

  return (
    <div className="page">
      <Header authorizationStatus={authorizationStatus}/>
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyInfo offer={currentOffer} reviews={comments}/>
          <section className="property__map map">
            <Map city={currentOffer.city} offers={mapOffers} activeOffer={activeOfferId}
              mapMods='property__map'
            />
          </section>
        </section>
        <div className="container">
          <SimilarOffers
            similarOffers={similarOffers}
          />
        </div>
      </main>
    </div>
  );
}

export default Property;
