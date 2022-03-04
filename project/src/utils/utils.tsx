import {Offer} from '../types/offers';

export const getRatingWidth = (rating: number) => `${rating * 100 / 5}%`;

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getCityOffers = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name.toLowerCase() === city);

export const getFavoriteOffers = (offers: Offer[]) => offers.filter((offer) => offer.isFavorite);
