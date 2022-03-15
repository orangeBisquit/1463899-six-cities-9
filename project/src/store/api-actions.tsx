import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './store';
import {CurrentOfferId, FavoriteFlag, Offer} from '../types/offers';
import {APIRoute, AppRoute, AuthorizationStatus} from '../utils/const';
import {
  getLogin,
  loadComments,
  loadOffers,
  loadOffersNearby,
  loadSingleOffer,
  redirectToRoute,
  requireAuthorization,
  setFavoriteOffers
} from './action';
import {dropToken, saveToken} from '../services/token';
import {AuthData, UserData} from '../types/auth-data';
import {errorHandle} from '../services/error-handle';
import {Review, ReviewPost} from '../types/reviews';
import {dropUserName, getUserName, saveUserName} from '../services/user-name';

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

export const postCommentAction = createAsyncThunk(
  'data/postComment',
  async ({id, comment, rating}: ReviewPost) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
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

export const fetchFavoriteOffersAction = createAsyncThunk(
  'data/loadFavorites',
  async (id: CurrentOfferId) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Favorite}`);
      store.dispatch(setFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const toggleFavoriteAction = createAsyncThunk(
  'data/postComment',
  async ({id, flag}: FavoriteFlag) => {
    try {
      await api.post<Offer>(`${APIRoute.Favorite}/${id}/${flag}`);
      await store.dispatch(fetchFavoriteOffersAction());
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

export const checkUserName = createAsyncThunk(
  'user/checkUserName',
  async () => {
    const userName = getUserName();
    store.dispatch(getLogin(userName));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(redirectToRoute(AppRoute.MainPage));
    saveUserName(email);
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    store.dispatch(redirectToRoute(AppRoute.Login));
    dropUserName();
  },
);
