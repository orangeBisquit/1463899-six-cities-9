import {createReducer} from '@reduxjs/toolkit';
import {
  getLogin,
  loadComments,
  loadOffers,
  loadOffersNearby,
  loadSingleOffer,
  requireAuthorization,
  setActiveOfferId,
  setCity,
  setOffers,
  setSortType
} from './action';
import {AuthorizationStatus} from '../utils/const';
import {CurrentOfferId, Offer} from '../types/offers';
import {Review} from '../types/reviews';

type initialState = {
  city: string,
  offers: Offer[],
  comments: Review[],
  sortType: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  login: string,
  activeOfferId: CurrentOfferId,
  currentOffer: Offer | null,
  similarOffers: Offer[],
};

const initialState: initialState = {
  city: 'paris',
  offers: [],
  comments: [],
  sortType: 'popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  login: '',
  activeOfferId: '',
  currentOffer: null,
  similarOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadSingleOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.similarOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getLogin, (state, action) => {
      state.login = action.payload;
    });
});
