import {Offer} from '../types/offers';

export const getCityOffers = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name.toLowerCase() === city);

export const getFavoriteOffers = (offers: Offer[]) => offers.filter((offer) => offer.isFavorite);
