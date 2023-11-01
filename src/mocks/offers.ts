import { CitiesName } from '../const';
import { TOffer } from '../types/offer';

export const offers: TOffer[] = [
  {
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: CitiesName.Amsterdam,
    },
    previewImage: 'https://14.react.pages.academy/static/offer/5.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Beautiful & luxurious studio at great location',
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    type: 'apartment',
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 25,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    id: '1',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 51.370216,
        longitude: 4.03568,
        zoom: 11
      },
      name: CitiesName.Cologne,
    },
    description: 'something interesting',
    goods: [
      'woter',
      'sofa'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
      name: 'Max',
      id: 5,
    },
    id: '2',
    images: [
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.8972578,
      longitude: 4.13448,
      zoom: 7,
    },
    maxAdults: 2,
    previewImage: 'https://14.react.pages.academy/static/offer/1.jpg',
    price: 100,
    rating: 4.9,
    title: 'Big house',
    type: 'House'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 53.6335635,
        longitude: 3.895168,
        zoom: 12
      },
      name: CitiesName.Paris,
    },
    description: 'This is Paris',
    goods: [
      'Pillows',
      'Dishwashing',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
      name: 'Angel',
      id: 3,
    },
    id: '3',
    images: [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 50.35514938496378,
      longitude: 3.673877537499948,
      zoom: 9
    },
    maxAdults: 1,
    previewImage: 'https://14.react.pages.academy/static/offer/9.jpg',
    price: 60,
    rating: 4.4,
    title: 'Room in Paris',
    type: 'Room',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 55.370216,
        longitude: 2.895168,
        zoom: 13,
      },
      name: CitiesName.Hamburg,
    },
    description: 'Germany',
    goods: [
      'Big size bed',
      'Wi-Fi',
      'Phone'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
      name: 'Maximillian',
      id: 9,
    },
    id: '4',
    images: [
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 54.35514938496378,
      longitude: 7.673877537499948,
      zoom: 11,
    },
    maxAdults: 5,
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    price: 187,
    rating: 4.1,
    title: 'Beautiful & luxurious',
    type: 'Hotel',
  },
];
