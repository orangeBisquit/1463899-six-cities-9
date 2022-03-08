export const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
};

export const CITIES = ['paris', 'cologne', 'brussels', 'amsterdam', 'hamburg', 'dusseldorf',
];

export const SortTypes = {
  Popular: 'popular',
  PriceLow: 'price-low',
  PriceHigh: 'price-high',
  TopRated: 'top-rated',
};

export const SORT_TYPES = {
  [SortTypes.Popular]: 'Popular',
  [SortTypes.PriceLow]: 'Price: low to high',
  [SortTypes.PriceHigh]: 'Price: high to low',
  [SortTypes.TopRated]: 'Top rated first',
};
