import {Review} from '../types/reviews';

export const reviews: Review[] = [
  {
    'id': 1,
    'user': {
      'id': 18,
      'isPro': true,
      'name': 'Sophie',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/9.jpg',
    },
    'rating': 5,
    'comment': 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    'date': '2022-01-30T15:13:26.371Z',
  },
  {
    'id': 2,
    'user': {
      'id': 11,
      'isPro': false,
      'name': 'Jack',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/2.jpg',
    },
    'rating': 4,
    'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    'date': '2022-01-30T15:13:26.371Z',
  },
  {
    'id': 3,
    'user': {
      'id': 18,
      'isPro': true,
      'name': 'Sophie',
      'avatarUrl': 'https://9.react.pages.academy/static/avatar/9.jpg',
    },
    'rating': 4,
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2022-01-30T15:13:26.371Z',
  },
];

