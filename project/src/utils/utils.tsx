export const getRatingWidth = (rating: number) => `${rating * 100 / 5}%`;

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
