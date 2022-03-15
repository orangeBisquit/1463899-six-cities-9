export enum AppRoute {
  MainPage = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

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

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
