export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CitiesLocation = { // fix
  Paris: {
    name: 'Paris',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  }
};

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const MAX_NEAR_PLACES_COUNT = 3;
export const MAX_REVIEWS_COUNT = 10;
