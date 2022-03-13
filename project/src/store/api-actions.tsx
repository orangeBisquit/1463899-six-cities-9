import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './store';
import {CurrentOfferId, Offer} from '../types/offers';
import {APIRoute, AppRoute, AuthorizationStatus} from '../utils/const';
import {
  loadComments,
  loadOffers,
  loadOffersNearby,
  loadSingleOffer,
  redirectToRoute,
  requireAuthorization
} from './action';
import {dropToken, saveToken} from '../services/token';
import {AuthData, UserData} from '../types/auth-data';
import {errorHandle} from '../services/error-handle';
import {Review} from '../types/reviews';

export const fetchOffersAction = createAsyncThunk(
  'data/loadOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSingleOfferAction = createAsyncThunk(
  'data/loadOffers',
  async (id: CurrentOfferId) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadSingleOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/loadComments',
  async (id: CurrentOfferId) => {
    try {

      if (!id) {
        return;
      }

      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${+id}`);
      store.dispatch(loadComments(data));

    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/loadComments',
  async (id: CurrentOfferId) => {
    try {

      if (!id) {
        return;
      }

      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadOffersNearby(data));

    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(redirectToRoute(AppRoute.MainPage));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    store.dispatch(redirectToRoute(AppRoute.Login));
  },
);
