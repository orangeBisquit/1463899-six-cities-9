import {AuthorizationStatus} from './const';

export const getRatingWidth = (rating: number) => `${Math.round(rating) * 100 / 5}%`;

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
