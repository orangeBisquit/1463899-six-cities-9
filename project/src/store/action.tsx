import {createAction} from '@reduxjs/toolkit';
import {CurrentOfferId, Offer} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../utils/const';
import {Review} from '../types/reviews';

export const setCity = createAction<string>('mainPage/setCity');

export const setOffers = createAction<Offer[]>('mainPage/setOffers');

export const setSortType = createAction<string>('mainPage/setSortType');

export const setActiveOfferId = createAction<CurrentOfferId>('offer/setOfferId');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadComments = createAction<Review[]>('data/loadComments');

export const loadOffersNearby = createAction<Offer[]>('data/offersNearby');

export const loadSingleOffer = createAction<Offer>('data/loadOffer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const getLogin = createAction('user/getLoginName', (value) => ({payload: value}));

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
