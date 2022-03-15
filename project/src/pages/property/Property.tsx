import Header from '../../components/header/Header';
import {CurrentOfferId} from '../../types/offers';
import {useParams} from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import SimilarOffers from '../../components/similarOffers/SimilarOffers';
import Map from '../../components/map/Map';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCommentsAction, fetchNearbyOffersAction, fetchSingleOfferAction} from '../../store/api-actions';
import PropertyInfo from '../../components/propertyInfo/PropertyInfo';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';

function Property() {
  const [similarActiveOffer, setActiveOffer] = useState<CurrentOfferId>();

  const handleOfferHover = (offerId: CurrentOfferId) => setActiveOffer(offerId);

  const {comments, currentOffer, similarOffers, offers} = useAppSelector((state) => state);

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

  if (!currentOffer) {
    return <LoadingScreen/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyInfo offer={currentOffer} reviews={comments}/>
          <section className="property__map map">
            <Map city={currentOffer.city} offers={similarOffers} activeOffer={similarActiveOffer}
              mapMods='property__map'
            />
          </section>
        </section>
        <div className="container">
          <SimilarOffers
            similarOffers={similarOffers}
            handleOfferHover={handleOfferHover}
            activeOffer={similarActiveOffer}
          />
        </div>
      </main>
    </div>
  );
}

export default Property;
