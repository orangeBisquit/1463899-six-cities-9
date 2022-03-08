import {Offer} from '../types/offers';
import {SortTypes} from './const';

const sortPriceLowToHigh = (offers: Offer[]) => [...offers].sort((a, b) => a.price - b.price);

const sortPriceHighToLow = (offers: Offer[]) => [...offers].sort((a, b) => b.price - a.price);

const sortRatingHigh = (offers: Offer[]) => [...offers].sort((a, b) => b.rating - a.rating);

export const sortOffers = (sortType: string, offers: Offer[]) => {
  switch (sortType) {
    case SortTypes.PriceLow:
      return sortPriceLowToHigh(offers);
    case SortTypes.PriceHigh:
      return sortPriceHighToLow(offers);
    case SortTypes.TopRated:
      return sortRatingHigh(offers);
    default:
      return offers;
  }
};
