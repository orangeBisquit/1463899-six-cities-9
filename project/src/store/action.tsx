import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers';

export const setCity = createAction<string>('mainPage/setCity');

export const setOffers = createAction<Offer[]>('mainPage/setOffers');

export const setSortType = createAction<string>('mainPage/setSortType');
